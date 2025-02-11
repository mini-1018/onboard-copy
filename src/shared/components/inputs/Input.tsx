import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
  "px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        primary: "border-primary focus:ring-primary",
        yellow:
          "w-full border border-yellow rounded-md px-3 py-2 mt-1 focus:border-none focus:border-primary",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputStyles> {}

export default function Input({
  className,
  variant,
  size,
  ...props
}: InputProps) {
  return (
    <input className={inputStyles({ variant, size, className })} {...props} />
  );
}
