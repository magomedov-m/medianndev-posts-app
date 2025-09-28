import PostLists from "@/components/PostLists";
import { useFetchPosts } from "@/hooks/usePosts";
import React from "react";

interface Props {
  className?: string;
}

const index: React.FC<Props> = () => {
  const { data, isLoading, isError } = useFetchPosts();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Непредвиденная ошибка...</div>;

  return <PostLists posts={data} />
};

export default index;