import { configureStore } from "@reduxjs/toolkit";
import ChatsSlice from "./logic/chats/ChatsSlice";

const store = configureStore({
    reducer:{
        chats: ChatsSlice
    }
})

export default store