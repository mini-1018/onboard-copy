import { axiosInstance } from "@/shared/api/axios";
import { CreateComment, UpdateComment } from "@/shared/types/comment.type";

export const createComment = async (comment: CreateComment) => {
  const response = await axiosInstance.post("/comments", comment);
  return response.data;
};

export const getComments = async (postId: number) => {
  const response = await axiosInstance.get(`/posts/${postId}/comments`);
  return response.data;
};

export const updateComment = async (id: number, comment: UpdateComment) => {
  const response = await axiosInstance.patch(`/comments/${id}`, comment);
  return response.data;
};

export const deleteComment = async (id: number) => {
  const response = await axiosInstance.delete(`/comments/${id}`);
  return response.data;
};
