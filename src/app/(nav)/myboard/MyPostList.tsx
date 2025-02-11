"use client";
import SearchInput from "@/shared/components/inputs/SearchInput";
import { FaClipboard } from "react-icons/fa";
import { useGetPostsByUserIdInfiniteQuery } from "@/entities/post/api/useGetPostsQuery";
import { useSession } from "next-auth/react";
import { Post, PostResponse } from "@/shared/types";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import PostListTemplate from "@/entities/post/ui/PostListTemplate";

export default function MyPostList({
  initialData,
}: {
  initialData: PostResponse;
}) {
  const [search, setSearch] = useState("");
  const { ref, inView } = useInView();
  const { data: session } = useSession();
  const userId = Number(session?.user?.id);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPostsByUserIdInfiniteQuery(userId, initialData, search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mt-5">
      <div className="flex-col justify-start md:flex md:flex-row  md:items-center md:justify-between text-primary">
        <div className="flex items-center">
          <FaClipboard className="md:text-3xl" />
          <p className="text-2xl md:text-[36px] font-bold my-2">나의 보드</p>
        </div>
        <div className="w-full md:w-[50%]">
          <SearchInput onChange={handleSearch} />
        </div>
      </div>
      <p className="text-primary text-xl font-bold mt-5">
        {data?.pages[0].totalCount}개의 포스트
      </p>
      <div className="flex flex-col items-center justify-center gap-y-[20px] mt-[20px]">
        {data?.pages.map((page) =>
          page.data.map((post: Post) => (
            <div key={post.id} className="w-full">
              <PostListTemplate post={post} />
            </div>
          ))
        )}
        <div ref={ref} className="h-10 w-full flex items-center justify-center">
          {isFetchingNextPage ? (
            <div>다음 페이지 로딩중</div>
          ) : hasNextPage ? (
            <div>더 보기</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
