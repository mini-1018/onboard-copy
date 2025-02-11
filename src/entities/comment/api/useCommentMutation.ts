import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment, updateComment, deleteComment } from "./comment";
import { CreateComment, UpdateComment } from "@/shared/types/comment.type";
import { QueryKeys } from "@/shared/constants/queryKeys";
import { toast } from "react-toastify";

export const useCommentMutations = (postId: number) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (data: CreateComment) => createComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.COMMENTS(postId) });
      toast.success("댓글이 작성되었습니다.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, comment }: { id: number; comment: UpdateComment }) =>
      updateComment(id, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.COMMENTS(postId) });
      toast.success("댓글이 수정되었습니다.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.COMMENTS(postId) });
      toast.success("댓글이 삭제되었습니다.");
    },
  });

  return {
    createComment: createMutation.mutate,
    updateComment: updateMutation.mutate,
    deleteComment: deleteMutation.mutate,
    isLoading:
      createMutation.isPending ||
      updateMutation.isPending ||
      deleteMutation.isPending,
  };
};
