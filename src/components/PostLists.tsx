import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Posts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface PostListProps {
  posts: Posts[] | undefined;
}

export default function PostLists({ posts }: PostListProps) {
  const router = useRouter();

  return (
    <div>
      Page: {router.asPath}
      {posts?.map((post) => (
        <Link href={`posts/${post.id}`}>
          <div key={post.id}>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}