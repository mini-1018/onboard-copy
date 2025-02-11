import Image from "next/image";
import { Post } from "@/shared/types";
import { FaHeart, FaComment, FaUser } from "react-icons/fa";
import {
  extractFirstImage,
  stripMarkdown,
} from "@/shared/editor/markdown.util";
import Link from "next/link";

export default function PostListTemplate({ post }: { post: Post }) {
  const { title, content, user, likes, createdAt, comments, id } = post;
  return (
    <Link href={`/posts/${id}`}>
      <div
        className="p-4 bg-white rounded-lg shadow-md 
      hover:translate-x-[-4px] transition-all duration-200 ease-in-out mb-4"
      >
        <div className="rounded-md overflow-hidden mb-4 aspect-[4/3] relative">
          <Image
            src={extractFirstImage(content)}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {stripMarkdown(content)}
          </p>
          <div className="flex items-center text-sm gap-3">
            <div className="flex items-center gap-1">
              <FaUser className="text-primary" />
              <span className="font-medium text-primary">{user.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart className="text-primary" />
              <p>{likes.length}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaComment className="text-primary" />
              <p>{comments.length}</p>
            </div>
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
