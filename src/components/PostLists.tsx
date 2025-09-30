import Link from "next/link";
import React from "react";
import { Post } from "@/types/post";

interface PostListProps {
  posts: Post[] | undefined;
}

export default function PostLists({ posts }: PostListProps) {

  return (
    <div className="mt-8 mb-8 mx-auto max-w-[1140px] flex flex-wrap justify-center gap-4 sm:w-152 md:w-184 lg:w-248 xl:w-285">
      {posts?.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`} className="block w-72 gap-4">
          <div className="flex flex-wrap items-center bg-slate-100 rounded-2xl shadow-md duration-200 hover:shadow-xl p-4 h-60 text-justify [hyphens:auto]">
            <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{post.body.slice(0, 100)}...</p>
            </div>
        </Link>
      ))}
    </div>
  );
}