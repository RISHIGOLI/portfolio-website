import { AxiosInstance } from "./helper";

export async function getAllChats() {
    try {
        const response = await AxiosInstance.get('/api/get_all_chats?page=1')
        return response.data
    } catch (error) {
        throw error
    }
}