import axios from "axios";
import { baseUrl } from "./axios";

export async function getPosts() {
    try {
        const response = await axios.get(baseUrl);

        return response.data;
    } catch (err) {
        console.error(`Ошибка при получении данных: ${err}`);
    }
}

export async function getPostById(id: number) {
    try {
        const response = await axios.get(`${baseUrl}${id}`);

        return response.data;
    } catch (err) {
        console.error(`Возникла ошибка во время запроса по id: ${err}`);
    }
}