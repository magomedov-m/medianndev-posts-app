import Pagination from "@/components/Pagination";
import PostLists from "@/components/PostLists";
import { usePagination } from "@/hooks/usePagination";
import { useFetchPosts } from "@/hooks/usePosts";
import React from "react";

interface Props {
  className?: string;
}

const index: React.FC<Props> = () => {
  const { currentPosts, currentPage, totalPages, nextPage, prevPage } =
    usePagination(8);

  const { data, isLoading, isError } = useFetchPosts();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Непредвиденная ошибка...</div>;

  return (
    <div className="mx-auto max-w-[1140px] p-6">
      <PostLists posts={currentPosts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPrev={prevPage} onNext={nextPage} />
    </div>
  );
};

export default index;
