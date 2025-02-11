import { useMutation } from "@tanstack/react-query";
import { toggleLike } from "./like";
import { LikeMutation } from "@/shared/types/like.type";

export const useLikeMutation = () => {
  return useMutation({
    mutationFn: (data: LikeMutation) => toggleLike(data.postId, data.userId),
  });
};
