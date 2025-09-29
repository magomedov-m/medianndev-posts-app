import { api } from "./axios";


export async function getPosts() {
    const response = await api.get("/posts/");

    return response.data;
}

export async function getPostById(id: number) {
    const response = await api.get(`/posts/${id}`);

    return response.data;
}