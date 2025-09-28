import Link from "next/link";
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

  return (
    <div>
      {posts?.map((post) => (
        <Link href={`posts/${post.id}`}>
          <div key={post.id}>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}