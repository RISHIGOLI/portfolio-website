import { instance } from "../../../services/axios-services"

export const fetchMessagesByChat = (chatId) => {
    return instance.get(`/api/get_chat_messages?chat_id=${chatId}`)
}