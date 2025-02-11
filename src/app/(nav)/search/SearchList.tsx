"use client";
import SearchInput from "@/shared/components/inputs/SearchInput";
import { FaSearch } from "react-icons/fa";
import { useSearchPostsInfiniteQuery } from "@/entities/post/api/useGetPostsQuery";
import { Post } from "@/shared/types";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import PostListTemplate from "@/entities/post/ui/PostListTemplate";
import PostListSkeletonTemplate from "@/entities/post/ui/PostListSkeletonTemplate";
import Loading from "@/shared/components/loading";

export default function SearchList() {
  const [search, setSearch] = useState("");
  const { ref, inView } = useInView();
  const [mounted, setMounted] = useState(false);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchPostsInfiniteQuery(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
      <div className="w-full flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        <div className="flex items-center justify-center text-primary gap-x-[10px]">
          <div className="flex items-center">
            <FaSearch className="text-3xl" />
          </div>
          <div className="w-[50%]">
            <SearchInput onChange={handleSearch} />
          </div>
        </div>
        <p className="text-primary text-xl font-bold">
          {data?.pages[0]?.totalCount ?? 0}개의 포스트
        </p>
        <div className="flex flex-col items-center justify-center gap-y-[20px] mt-[20px]">
          {data?.pages.map((page) =>
            page.data.map((post: Post) => (
              <div key={post.id} className="w-full">
                <PostListTemplate post={post} />
              </div>
            ))
          )}
          <div ref={ref}>
            {isFetchingNextPage ? (
              <PostListSkeletonTemplate />
            ) : hasNextPage ? (
              <PostListSkeletonTemplate />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
