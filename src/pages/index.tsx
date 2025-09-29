import NavBar from "@/components/NavBar";
import Pagination from "@/components/Pagination";
import PostLists from "@/components/PostLists";
import Skeleton from "@/components/Skeleton";
import { usePagination } from "@/hooks/usePagination";
import React from "react";

interface Props {
  className?: string;
}

const index: React.FC<Props> = () => {
  const {
    currentPosts,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    isLoading,
    isError,
  } = usePagination(8);

  return (
    <div className="mx-auto max-w-[1140px] p-6">
      <NavBar />

      {isLoading && <Skeleton />}
      {isError && "Непредвиденная ошибка"}

      <PostLists posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={prevPage}
        onNext={nextPage}
      />
    </div>
  );
};

export default index;
