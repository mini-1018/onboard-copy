import { Comment } from "@/shared/types/comment.type";

export interface Post {
  id: number;
  title: string;
  content: string;
  tags: { name: string }[];
  user: { id: string; name: string };
  likes: { userId: number }[];
  createdAt: string;
  comments: Comment[];
}

export interface PostResponse {
  data: Post[];
  hasNextPage: boolean;
  nextCursor?: number;
  totalCount?: number;
}

export interface GetPostsParams {
  cursor?: number;
  limit?: number;
  tags?: string;
  search?: string;
  orderBy?: string;
  userId?: number;
}

export interface PostData {
  id?: number;
  title: string;
  content: string;
  tags?: string[];
}

export interface PostState {
  post: PostData | null;
  setPost: (post: PostData | null) => void;
  clearPost: () => void;
}
