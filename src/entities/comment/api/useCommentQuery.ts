import { QueryKeys } from "@/shared/constants/queryKeys";
import { getComments } from "./comment";
import { useQuery } from "@tanstack/react-query";
import { Comment } from "@/shared/types/comment.type";

export const useCommentQuery = (
  postId: number,
  { initialData }: { initialData?: Comment[] }
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: QueryKeys.COMMENTS(postId),
    queryFn: () => getComments(postId),
    initialData,
  });

  return { data, isLoading, error };
};
