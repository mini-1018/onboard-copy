"use client";
import PostTemplate from "@/entities/post/ui/PostTemplate";
import { Post, PostResponse } from "@/shared/types";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useGetPostsInfiniteQuery } from "@/entities/post/api/useGetPostsQuery";
import PostSkeletonTemplate from "@/entities/post/ui/PostSkeletonTemplate";

export default function PostList({
  initialData,
}: {
  initialData: PostResponse;
}) {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPostsInfiniteQuery(initialData);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (!mounted) {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-x-[45px] gap-y-[35px]">
          {initialData.data.map((post) => (
            <PostTemplate post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-x-[20px] gap-y-[35px] mt-[40px]">
        {data.pages.map((page) =>
          page.data.map((post: Post) => (
            <PostTemplate post={post} key={post.id} />
          ))
        )}
        <div ref={ref}>
          {isFetchingNextPage ? (
            <PostSkeletonTemplate />
          ) : hasNextPage ? (
            <PostSkeletonTemplate />
          ) : null}
        </div>
      </div>
    </div>
  );
}
