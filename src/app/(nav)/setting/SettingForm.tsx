"use client";
import { useState, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Button from "@/shared/components/buttons/Button";
import Input from "@/shared/components/inputs/Input";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/entities/user/api/useUserMutation";
import { toast } from "react-toastify";

export default function SettingForm() {
  const { data: session, update } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(session?.user.name || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateUserMutation = useUpdateUserMutation();
  const deleteUserMutation = useDeleteUserMutation();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && session?.user?.id) {
      updateUserMutation.mutate(
        { userId: session.user.id, image: file },
        {
          onSuccess: (updatedUser) => {
            update({
              ...session,
              user: { ...session?.user, image: updatedUser.image[0].url },
            });
            toast.success("이미지가 업데이트되었습니다.");
          },
          onError: () => {
            toast.error("이미지 업데이트에 실패했습니다.");
          },
        }
      );
    }
  };

  const handleNameUpdate = async () => {
    if (session?.user?.id) {
      updateUserMutation.mutate(
        { userId: session.user.id, name: newName },
        {
          onSuccess: async (updatedUser) => {
            setIsEditing(false);
            update({
              ...session,
              user: {
                ...session?.user,
                name: updatedUser.name,
              },
            });
            toast.success("이름이 변경되었습니다.");
          },
          onError: () => {
            toast.error("이름 변경에 실패했습니다.");
          },
        }
      );
    }
  };

  const handleDeleteUser = async () => {
    if (session?.user?.id) {
      deleteUserMutation.mutate(
        { userId: session.user.id },
        {
          onSuccess: () => {
            signOut({ callbackUrl: "/" });
            toast.success("회원탈퇴가 완료되었습니다.");
          },
          onError: () => {
            toast.error("회원탈퇴에 실패했습니다.");
          },
        }
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-8 text-center text-primary">
        프로필 설정
      </h1>

      <div className="flex flex-col items-center space-y-8">
        {/* 프로필 이미지 섹션 */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
            <Image
              src={session?.user.image || "/default-profile.png"}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="primary"
            size="sm"
          >
            이미지 변경
          </Button>
        </div>

        <div className="w-full border-t border-yellow" />

        <div className="w-full max-w-md">
          <div className="flex flex-col items-center gap-4">
            <div className="text-lg font-bold text-primary">닉네임</div>
            {isEditing ? (
              <div className="w-full flex gap-2">
                <Input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="flex-1"
                  placeholder="새로운 이름을 입력하세요"
                />
                <Button onClick={handleNameUpdate}>저장</Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-lg font-medium">
                  {session?.user.name}
                </span>
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="primary"
                  size="sm"
                >
                  수정
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full border-t border-yellow" />

        <div className="w-full flex justify-center">
          <Button onClick={handleDeleteUser} variant="warning" size="sm">
            회원 탈퇴
          </Button>
        </div>
      </div>
    </div>
  );
}
