"use client";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("text-[16px] font-bold rounded-lg", {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary-hover",
      yellow: "bg-yellow text-black hover:bg-yellow-hover",
      disabled: "bg-gray text-black font-bold cursor-not-allowed",
      warning: "bg-gray-500 text-white hover:bg-red-hover",
    },
    size: {
      s: "w-[80px] h-[40px]",
      sm: "w-[100px] h-[40px]",
      md: "w-[150px] h-[50px]",
      lg: "w-[200px] h-[60px]",
      wFull: "w-full h-[40px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export default function Button({ variant, size, ...props }: ButtonProps) {
  return <button className={buttonStyles({ variant, size })} {...props} />;
}
