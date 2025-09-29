import { getPostById, getPosts } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";
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
    const { data: posts, isLoading, isError } = useFetchPosts();

    const filtered = useMemo(() => {
        if (!posts) return [];
        const q = query.trim().toLowerCase();
        if (!q) return posts;
        return posts.filter((p: any) => p.title.toLowerCase().includes(q));
    }, [posts, query]);

    return {
        data: filtered,
        isLoading,
        isError,
        total: filtered?.length ?? 0,
    };
};