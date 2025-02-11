"use client";
import { useSignUpForm } from "@/hooks/useFormValidate";
import Link from "next/link";
import Input from "@/shared/components/inputs/Input";
import InputError from "@/shared/components/inputs/InputError";
import InputLabel from "@/shared/components/inputs/InputLabel";
import Logo from "@/shared/components/Images/Logo";
import Button from "@/shared/components/buttons/Button";
import { useSignupMutation } from "@/entities/user/api/useUserMutation";
import { SignUp } from "@/shared/types/user.type";
import { useState } from "react";
import Image from "next/image";

export default function SignupForm() {
  const { register, handleSubmit, errors, isValid } = useSignUpForm();
  const [preview, setPreview] = useState<string | null>(null);

  const { mutate } = useSignupMutation();
  const onSubmit = (data: SignUp) => {
    mutate(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPreview(null);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-[20px] h-screen">
      <Logo />
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[300px] md:w-[400px]">
          <InputLabel label="이메일" htmlFor="email" />
          <Input type="email" {...register("email")} variant="yellow" />
          {errors.email && (
            <InputError error={errors.email.message as string} />
          )}
        </div>
        <div>
          <InputLabel label="이름" htmlFor="name" />
          <Input type="text" {...register("name")} variant="yellow" />
          {errors.name && <InputError error={errors.name.message as string} />}
        </div>
        <div>
          <InputLabel label="비밀번호" htmlFor="password" />
          <Input type="password" {...register("password")} variant="yellow" />
          {errors.password && (
            <InputError error={errors.password.message as string} />
          )}
        </div>
        <div>
          <InputLabel label="비밀번호 확인" htmlFor="confirmPassword" />
          <Input
            type="password"
            {...register("confirmPassword")}
            variant="yellow"
          />
          {errors.confirmPassword && (
            <InputError error={errors.confirmPassword.message as string} />
          )}
        </div>
        <div className="space-y-2">
          <InputLabel label="프로필 이미지" htmlFor="image" />
          <label
            htmlFor="image"
            className="flex items-center justify-center w-full h-[40px] border-2 border-dashed border-yellow rounded-lg cursor-pointer hover:bg-yellow transition-colors"
          >
            <span className="text-primary font-bold">이미지 첨부</span>
            <input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
              {...register("image", {
                onChange: handleImageChange,
              })}
            />
          </label>
          {errors.image && (
            <InputError error={errors.image.message as string} />
          )}
          {preview && (
            <div className="relative w-full h-[200px] rounded-lg">
              <Image
                src={preview}
                alt="프로필 이미지 미리보기"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <Button
          type="submit"
          disabled={!isValid}
          variant={isValid ? "primary" : "disabled"}
          size="wFull"
        >
          회원가입
        </Button>
        <p className="text-sm text-primary text-center">
          이미 회원이신가요?{" "}
          <Link href="/signin" className="text-primary underline font-bold">
            로그인
          </Link>
        </p>
      </form>
    </div>
  );
}
