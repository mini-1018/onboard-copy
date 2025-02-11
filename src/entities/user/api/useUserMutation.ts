import { useMutation } from "@tanstack/react-query";
import { deleteUser, signup, updateUser } from "@/entities/user/api/user";
import { toast } from "react-toastify";
import { DeleteUser, SignUp, UpdateUser } from "@/shared/types/user.type";
import { useRouter } from "next/navigation";

export const useSignupMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignUp) => {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("name", data.name);
      formData.append("password", data.password);
      formData.append("image", data.image);
      return signup(formData);
    },
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다.");
      router.push("/signin");
    },
    onError: () => {
      toast.error("회원가입에 실패했습니다.");
    },
  });
};

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (data: UpdateUser) => {
      const formData = new FormData();
      if (data.name) {
        formData.append("name", data.name);
      }
      if (data.image) {
        formData.append("image", data.image);
      }
      formData.append("userId", data.userId);
      return updateUser(formData);
    },
    onSuccess: (userData) => {
      return userData;
    },
  });
};

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: (data: DeleteUser) => deleteUser(data),
  });
};
