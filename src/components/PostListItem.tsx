import { useFetchPostById } from "@/hooks/usePosts";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  className?: string;
}

const PostListItem: React.FC<Props> = ({ className }) => {
  const { data, isLoading, isError } = useFetchPostById(1);

  const router = useRouter();

  if (isLoading) return `Загрузка элемента...`;
  if (isError) return `Это непредвиденная ошибка`;

  return (
    <div className={className}>
      {data.id}
    </div>
  );
};

export default PostListItem;
