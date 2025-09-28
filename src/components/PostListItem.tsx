import React from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostContentProps {
  post: Post;
}

const PostListItem: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="mx-auto max-w-[800px] bg-slate-100 rounded-2xl shadow-md p-6 flex flex-col gap-4 mt-8">
      <h1 className="text-2xl font-bold text-slate-800">{post.title}</h1>
      <div className="flex gap-4 text-slate-700 text-sm">
        <span>
          <strong>ID:</strong> {post.id}
        </span>
        <span>
          <strong>User ID:</strong> {post.userId}
        </span>
      </div>
      <p className="text-slate-700 text-justify [hyphens:auto] leading-relaxed">{post.body}</p>
    </div>
  );
};

export default PostListItem;
