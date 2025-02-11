import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다"),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요")
    .max(20, "비밀번호는 최대 20자까지 가능합니다"),
});

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, "이메일을 입력해주세요")
      .email("올바른 이메일 형식이 아닙니다"),
    name: z
      .string()
      .min(1, "이름을 입력해주세요")
      .max(50, "이름은 최대 50자까지 가능합니다"),
    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
      .max(20, "비밀번호는 최대 20자까지 가능합니다"),
    confirmPassword: z.string().min(1, "비밀번호 확인을 입력해주세요"),
    image: z
      .any()
      .refine((value) => value instanceof FileList)
      .transform((list) => list.item(0))
      .refine((file) => file instanceof File, "프로필 이미지를 첨부해주세요"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "비밀번호가 일치하지 않습니다",
      });
    }
  });

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

export const useSignInForm = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  return {
    getValues,
    register,
    handleSubmit,
    errors,
    isValid,
  };
};

export const useSignUpForm = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  return {
    getValues,
    register,
    handleSubmit,
    errors,
    isValid,
  };
};
