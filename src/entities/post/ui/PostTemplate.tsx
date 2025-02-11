"use client";
import Image from "next/image";
import {
  stripMarkdown,
  extractFirstImage,
} from "@/shared/editor/markdown.util";
import { Post } from "@/shared/types";
import Link from "next/link";
import { FaComment, FaHeart, FaUser } from "react-icons/fa";

export default function PostTemplate({
  post,
}: {
  post: Post;
}): React.ReactNode {
  const { title, content, user, likes, createdAt, comments, id } = post;
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex flex-col items-center justify-center w-full rounded-lg shadow-primary transform transition-transform hover:-translate-y-2 hover:shadow-lg">
        <div className="w-full rounded-t-lg overflow-hidden aspect-[4/3] relative">
          <Image
            src={extractFirstImage(content)}
            alt="게시글 이미지"
            fill
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between w-full h-[200px] p-4">
          <h1 className="text-[16px] font-bold line-clamp-1">{title}</h1>
          <p className="text-[12px] line-clamp-3">{stripMarkdown(content)}</p>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1">
              <FaUser className="text-primary" />
              <p className="text-[14px]">{user.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart className="text-primary" />
              <p className="text-[14px]">{likes.length}</p>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-[14px]">{createdAt}</p>
            <div className="flex items-center gap-1">
              <FaComment className="text-primary" />
              <p className="text-[14px]">{comments.length}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
