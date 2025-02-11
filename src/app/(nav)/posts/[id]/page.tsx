import { getPostById } from "@/entities/post/api/post";
import PostMainContent from "./PostMainContent";
import { Metadata } from "next";
import { getComments } from "@/entities/comment/api/comment";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);
  return {
    title: post.title,
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);
  const initialComments = await getComments(post.id);
  return <PostMainContent post={post} initialComments={initialComments} />;
}
