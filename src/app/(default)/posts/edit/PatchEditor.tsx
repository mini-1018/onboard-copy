"use client";
import { useUpdatePostMutation } from "@/entities/post/api/usePostMutation";
import { usePostStore } from "@/entities/post/model/postStore";
import MarkdownEditor from "@/shared/editor/MarkdownEditor";
import { PostData } from "@/shared/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function PatchEditor() {
  const updatePostMutation = useUpdatePostMutation();
  const { post, setPost } = usePostStore();

  const router = useRouter();

  const handleSubmit = (postData: PostData) => {
    updatePostMutation.mutate(postData, {
      onSuccess: (data) => {
        setPost(null);
        toast.success("수정이 완료되었습니다.");
        router.push(`/posts/${data.id}`);
      },
      onError: () => {
        toast.error("수정에 실패했습니다.");
      },
    });
  };

  return (
    <MarkdownEditor
      onSubmit={handleSubmit}
      buttonText="수정"
      initialPost={post}
    />
  );
}
