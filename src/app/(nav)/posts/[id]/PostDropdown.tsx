import Dropdown from "@/shared/components/dropdown/Dropdown";
import { Post } from "@/shared/types";

export default function PostDropdown({ post }: { post: Post }) {
  return <Dropdown type="post" post={post} />;
}
