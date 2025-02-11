"use client";
import Button from "@/shared/components/buttons/Button";
import SigninForm from "@/app/(default)/signin/SigninForm";
import Modal from "@/shared/components/modal/Modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Dropdown from "@/shared/components/dropdown/Dropdown";
import { FaSearch } from "react-icons/fa";

export default function NavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const openModal = () => {
    setIsOpen(true);
    window.history.pushState({ previousPath: pathname }, "", "/signin");
  };

  const closeModal = () => {
    setIsOpen(false);
    const previousPath = window.history.state?.previousPath || pathname;
    window.history.pushState(null, "", previousPath);
  };

  return (
    <div className="flex gap-[2vw] items-center">
      <div className="hidden md:block">
        <Link href="/search" aria-label="게시글 검색" title="게시글 검색">
          <FaSearch className="text-2xl text-primary" />
        </Link>
      </div>

      <Link href="/posts/create" aria-label="글작성">
        <div className="hidden md:block">
          <Button>글작성</Button>
        </div>
      </Link>

      {session ? (
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image
              src={`${session.user.image}`}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          <Dropdown type="nav" />
        </div>
      ) : (
        <Button onClick={openModal}>로그인</Button>
      )}
      {isOpen && (
        <Modal closeModal={closeModal}>
          <SigninForm setIsOpen={setIsOpen} />
        </Modal>
      )}
    </div>
  );
}
