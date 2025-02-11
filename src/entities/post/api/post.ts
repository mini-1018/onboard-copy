import { GetPostsParams, PostData } from "@/shared/types";
import { axiosInstance } from "@/shared/api/axios";

export const getPosts = async (params?: GetPostsParams) => {
  const response = await axiosInstance.get("/posts", { params });
  return response.data;
};

export const getPostsByUserId = async (
  userId: number,
  params: GetPostsParams
) => {
  const response = await axiosInstance.get(`/users/${userId}/posts`, {
    params,
  });

  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: PostData, userId: string) => {
  const response = await axiosInstance.post("/posts", { ...post, userId });
  return response.data;
};

export const updatePost = async (post: PostData) => {
  const response = await axiosInstance.patch("/posts", post);
  return response.data;
};
