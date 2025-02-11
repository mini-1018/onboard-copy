"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks(): React.ReactNode {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-[1.5vw] ml-[2.5vw]">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-primary-hover" : "text-primary"
        } cursor-pointer text-[20px] font-bold`}
      >
        Posts
      </Link>
      <div className="text-[20px]">||</div>
      <Link
        href="/questions"
        className={`${
          pathname === "/questions" ? "text-primary-hover" : "text-primary"
        } cursor-pointer text-[20px] font-bold`}
      >
        Questions
      </Link>
    </div>
  );
}
