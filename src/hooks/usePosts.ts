import { getPostById, getPosts } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { useMemo } from "react";

export const useFetchPosts = () =>
    useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

export const useFetchPostById = (id: number) =>
    useQuery({
        queryKey: ['post', id],
        queryFn: () => getPostById(id),
    });

export const useSearchPosts = (query: string) => {
    const debouncedQuery = useDebounce(query, 300);
    const { data: posts, isLoading, isError } = useFetchPosts();

    const filtered = useMemo(() => {
        if (!posts) return undefined;
        const q = (debouncedQuery || "").trim().toLowerCase();
        if (!q) return posts;
        return posts.filter((p: any) => p.title.toLowerCase().includes(q));
    }, [posts, debouncedQuery]);

    return {
        data: filtered,
        isLoading,
        isError,
        query: debouncedQuery,
        total: filtered?.length ?? 0,
    };
};