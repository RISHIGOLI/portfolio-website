import { configureStore } from "@reduxjs/toolkit";
import ChatsSlice from "./logic/chats/ChatsSlice";
import MessagesSlice from "./logic/messages/MessagesSlice";

const store = configureStore({
    reducer: {
        chats: ChatsSlice,
        messages: MessagesSlice
    }
})

export default store