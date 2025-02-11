"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikeMutation } from "../api/useLikeMutation";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function LikeButton({
  initialLikes,
  postId,
  userId,
}: {
  initialLikes: { userId: number }[];
  postId: number;
  userId: number;
}) {
  const session = useSession();
  const isUserLiked = initialLikes.some(
    (like) => like.userId === Number(session?.data?.user.id)
  );
  const [likes, setLikes] = useState(initialLikes.length);
  const [isLiked, setIsLiked] = useState(isUserLiked);
  const { mutate: likeMutation } = useLikeMutation();

  const handleLike = () => {
    likeMutation(
      { postId, userId },
      {
        onSuccess: (data) => {
          setLikes(data.likeCount);
          setIsLiked(data.isLiked);
        },
      }
    );
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
    >
      {isLiked ? (
        <FaHeart className="text-red text-lg" />
      ) : (
        <FaRegHeart className="text-primary text-lg hover:text-red" />
      )}
      <span className="text-sm text-primary">{likes}</span>
    </button>
  );
}
