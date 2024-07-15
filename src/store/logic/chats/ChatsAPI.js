import { instance } from "../../../services/axios-services"

export const fetchAllChats = (pageNumber) => {
    return instance.get(`/api/get_all_chats?page=${pageNumber}`)
}