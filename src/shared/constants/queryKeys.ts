import { GetPostsParams } from "../types";

export const QueryKeys = {
  POSTS: (params: GetPostsParams) => ["posts", { params }],
  MY_POSTS: (userId: number, search?: string) => [
    "myPosts",
    { userId, search },
  ],
  COMMENTS: (postId: number) => ["comments", { postId }],
};
