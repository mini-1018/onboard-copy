"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DropdownItem, DropdownProps } from "@/shared/types/dropdown.type";
import { usePostStore } from "@/entities/post/model/postStore";
import { useRouter } from "next/navigation";
import { FaClipboard, FaEdit, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export default function Dropdown({ type, items = [], post }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPost } = usePostStore();
  const router = useRouter();
  const postData = post
    ? {
        id: post.id,
        title: post.title,
        content: post.content,
        tags: post.tags.map((tag) => tag.name),
      }
    : null;

  const dropdownOptions: Record<string, DropdownItem[]> = {
    nav: [
      {
        text: (
          <div className="flex justify-center items-center  py-2 gap-1">
            <FaClipboard />
            <p>내 보드</p>
          </div>
        ),
        href: "/myboard",
      },
      {
        text: (
          <div className="flex justify-center items-center gap-1  py-2 md:hidden">
            <FaSearch />
            <p>검색</p>
          </div>
        ),
        href: "/search",
      },
      {
        text: (
          <div className="flex justify-center items-center py-2 gap-1">
            <IoSettings />
            <p>설정</p>
          </div>
        ),
        href: "/setting",
      },
      {
        text: (
          <div className="flex justify-center items-center py-2 gap-1">
            <RiLogoutBoxFill className="text-primary" />
            <p>로그아웃</p>
          </div>
        ),
        onClick: () => signOut({ callbackUrl: "/signin" }),
        className: "text-red-600",
      },
    ],
    post: [
      {
        text: (
          <div className="flex justify-center items-center  py-2 gap-1">
            <FaEdit className="text-primary" />
            <p>수정하기</p>
          </div>
        ),
        onClick: () => {
          setPost(postData);
          router.push("/posts/edit");
        },
      },
      {
        text: (
          <div className="flex justify-center items-center  py-2 gap-1">
            <MdDelete className="text-red" />
            <p className="text-red">삭제하기</p>
          </div>
        ),
      },
    ],
    comment: [
      { text: "수정하기", href: "#" },
      { text: "삭제하기", className: "text-red" },
    ],
  };
  const dropdownItems = [...dropdownOptions[type], ...items];

  return (
    <div className={`relative ${type === "nav" ? "z-50" : "z-40"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-lg"
        aria-label="메뉴"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl">
          {dropdownItems.map((item, index) =>
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className={`block text-sm text-center hover:bg-gray ${
                  item.className || "text-primary"
                }`}
              >
                {item.text}
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.onClick}
                className={`w-full text-sm text-center hover:bg-gray ${
                  item.className || "text-primary"
                }`}
              >
                {item.text}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
