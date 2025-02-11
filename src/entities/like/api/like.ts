import { axiosInstance } from "@/shared/api/axios";

export const toggleLike = async (postId: number, userId: number) => {
  const response = await axiosInstance.post(`/likes/${postId}`, { userId });
  return response.data;
};
