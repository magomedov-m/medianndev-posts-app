import axios from "axios";
import { baseUrl } from "./axios";

export async function getPosts() {
    const response = await axios.get(baseUrl);

    return response.data;
}

export async function getPostById(id: number) {
    const response = await axios.get(`${baseUrl}${id}`);

    return response.data;
}