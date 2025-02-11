import {
  Comment,
  CreateComment,
  UpdateComment,
} from "@/shared/types/comment.type";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import CommentInput from "./CommentInput";

export default function CommentItem({
  comment,
  depth = 0,
  postId,
  handleCreateComment,
  handleUpdateComment,
  handleDeleteComment,
}: {
  comment: Comment;
  depth?: number;
  postId: number;
  handleCreateComment?: (data: CreateComment) => void;
  handleUpdateComment?: (id: number, data: UpdateComment) => void;
  handleDeleteComment?: (id: number) => void;
}) {
  const { data: session } = useSession();
  const maxDepth = 5;
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const hasReplies = comment.replies && comment.replies.length > 0;
  const isMyComment = String(session?.user.id) === String(comment.user.id);

  const handleSubmitEdit = () => {
    handleUpdateComment?.(comment.id, { content: editContent });
    setIsEditing(false);
  };

  const handleSubmitDelete = () => {
    handleDeleteComment?.(comment.id);
  };

  const handleSubmitReply = (content: string) => {
    handleCreateComment?.({
      content,
      postId,
      parentId: comment.id,
      userId: Number(session?.user?.id),
    });
    setIsReplying(false);
  };

  return (
    <div className="w-full py-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={comment.user.image || "/default-profile.png"}
            alt={comment.user.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-medium text-sm text-black">
              {comment.user.name}
            </span>
            <span className="text-xs text-black">{comment.createdAt}</span>
          </div>

          {isEditing ? (
            <div className="mt-2">
              <CommentInput
                isReply
                onCancel={() => setIsEditing(false)}
                defaultValue={comment.content}
                onChange={setEditContent}
                onSubmit={handleSubmitEdit}
                isEdit
              />
            </div>
          ) : (
            <>
              <p className="text-sm text-black break-words">
                {comment.content}
              </p>
              <div className="flex gap-4 mt-2 text-xs">
                {session && depth < maxDepth && (
                  <button
                    className="text-black"
                    onClick={() => setIsReplying(true)}
                  >
                    답글
                  </button>
                )}
                {isMyComment && (
                  <>
                    <button
                      className="text-black"
                      onClick={() => setIsEditing(true)}
                    >
                      수정
                    </button>
                    <button className="text-black" onClick={handleSubmitDelete}>
                      삭제
                    </button>
                  </>
                )}
                {hasReplies && (
                  <button
                    className="text-black flex items-center gap-1"
                    onClick={() => setShowReplies(!showReplies)}
                  >
                    {showReplies ? (
                      <>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        답글 숨기기
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {`답글 ${comment.replies?.length}개`}
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* 답글 작성 폼 */}
      {isReplying && (
        <div className="mt-4">
          <CommentInput
            isReply
            onCancel={() => setIsReplying(false)}
            onSubmit={handleSubmitReply}
          />
        </div>
      )}

      {/* 대댓글 목록 */}
      {hasReplies && showReplies && (
        <div className="mt-2 space-y-1 border-l-0">
          {comment.replies?.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              handleCreateComment={handleCreateComment}
              handleUpdateComment={handleUpdateComment}
              handleDeleteComment={handleDeleteComment}
              postId={postId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
