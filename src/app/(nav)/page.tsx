import { getPosts } from "@/entities/post/api/post";
import PostList from "@/app/(nav)/PostList";
import { Suspense } from "react";
import PostSkeletonTemplate from "@/entities/post/ui/PostSkeletonTemplate";

export default async function Posts() {
  const initialData = await getPosts({ limit: 20, orderBy: "latest" });
  return (
    <Suspense fallback={<PostSkeletonTemplate />}>
      <PostList initialData={initialData} />
    </Suspense>
  );
}
