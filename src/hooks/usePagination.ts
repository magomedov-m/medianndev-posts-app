import { useState, useMemo } from "react";
import { useFetchPosts } from "./usePosts";

export function usePagination(pageSize = 13) {
    const { data: posts, isLoading, isError } = useFetchPosts();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        if (!posts) return 1;
        
        return Math.ceil(posts.length / pageSize);
    }, [posts, pageSize]);

    const currentPosts = useMemo(() => {
        if (!posts) return [];
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return posts.slice(start, end);
    }, [posts, currentPage, pageSize]);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const goToPage = (page: number) => setCurrentPage(Math.min(Math.max(1, page), totalPages));

    return {
        currentPosts,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
        isLoading,
        isError,
    }
}