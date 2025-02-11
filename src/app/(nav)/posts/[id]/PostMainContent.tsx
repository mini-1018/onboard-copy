import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Post } from "@/shared/types";
import PostDropdown from "./PostDropdown";
import PostComments from "./PostComments";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { Comment } from "@/shared/types/comment.type";
import LikeButton from "@/entities/like/ui/LikeButton";
import { FaUser } from "react-icons/fa";
import { MarkdownImage } from "@/shared/components/Images/MarkdownImage";

export default async function PostMainContent({
  post,
  initialComments,
}: {
  post: Post;
  initialComments: Comment[];
}) {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id;

  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] flex flex-col items-left">
        <div className="flex justify-between items-center w-full">
          <h1>{post.title}</h1>
          {sessionId === post.user.id && <PostDropdown post={post} />}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-x-[10px] items-center">
            <FaUser className="text-primary text-xxl" />
            <p>{post.user.name}</p>
            <p>|</p>
            <p>{post.createdAt}</p>
          </div>

          <div className="flex items-center gap-1">
            <LikeButton
              initialLikes={post.likes}
              postId={post.id}
              userId={Number(sessionId)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5 mb-2 border-b border-primary pb-5">
          {post.tags.map((tag, index) => (
            <p
              key={index}
              className="flex items-center gap-1 px-2 py-0.5 bg-gray hover:bg-yellow rounded-md text-sm text-primary transition-colors"
            >
              {tag.name}
            </p>
          ))}
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownImage}>
            {post.content}
          </ReactMarkdown>
        </div>
        <div>
          <PostComments
            initialComments={initialComments}
            userId={post.user.id}
            postId={post.id}
          />
        </div>
      </div>
    </div>
  );
}
