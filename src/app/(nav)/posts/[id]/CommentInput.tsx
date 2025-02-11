"use client";
import Button from "@/shared/components/buttons/Button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface CommentInputProps {
  isReply?: boolean;
  isEdit?: boolean;
  onCancel?: () => void;
  defaultValue?: string;
  onSubmit?: (content: string) => void;
  onChange?: (content: string) => void;
}

export default function CommentInput({
  isReply,
  isEdit,
  onCancel,
  defaultValue,
  onSubmit,
  onChange,
}: CommentInputProps) {
  const { data: session } = useSession();
  const [content, setContent] = useState(defaultValue || "");

  const handleSubmit = () => {
    if (content.trim() === "") return;
    onSubmit?.(content);
    setContent("");
  };

  if (!session) return null;

  return (
    <div className={`flex gap-2 ${!isReply ? "mt-8" : "mt-4"}`}>
      <div className="flex gap-3 w-full mb-2">
        <div
          className={`${
            isReply ? "w-7 h-7" : "w-10 h-10"
          } relative rounded-full overflow-hidden flex-shrink-0`}
        >
          <Image
            src={session.user.image || "/default-profile.png"}
            alt="profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <textarea
            className="w-full px-3 py-2 text-sm bg-gray border border-gray rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-yellow focus:border-yellow transition-colors"
            defaultValue={defaultValue}
            placeholder={
              isReply ? "답글을 작성해주세요" : "댓글을 작성해주세요"
            }
            rows={isReply ? 2 : 3}
            onChange={(e) => {
              setContent(e.target.value);
              onChange?.(e.target.value);
            }}
            value={content}
          />
          <div className="flex justify-end gap-2 mt-2">
            {isReply && (
              <Button onClick={onCancel} variant="yellow" size="sm">
                취소
              </Button>
            )}
            <Button size="sm" onClick={handleSubmit}>
              {isEdit ? "수정" : isReply ? "답글 작성" : "댓글 작성"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
