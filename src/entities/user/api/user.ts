import { axiosInstance } from "@/shared/api/axios";
import { DeleteUser, Signin } from "@/shared/types/user.type";

export const signin = async ({ email, password }: Signin) => {
  const response = await axiosInstance.post("/users/signin", {
    email,
    password,
  });
  return response.data;
};

export const signup = async (formData: FormData) => {
  const response = await axiosInstance.post("/users/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updateUser = async (formData: FormData) => {
  const response = await axiosInstance.patch("/users/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteUser = async ({ userId }: DeleteUser) => {
  const response = await axiosInstance.delete(`/users/delete`, {
    data: { userId },
  });
  return response.data;
};
