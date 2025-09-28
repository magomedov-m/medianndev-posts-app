import { getPostById, getPosts } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";

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