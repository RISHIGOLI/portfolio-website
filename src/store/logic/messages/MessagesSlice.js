import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessagesByChat } from "./MessagesAPI";

const initialState = {
    error: false,
    loading: true,
    success: false,
    messages: []
}
const MessagesSlice = createSlice({
    name: 'messages',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state, action) => {
            return {
                ...state,
                loading: true
            }
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                success: true,
                messages: action.payload.data
            }
        });
        builder.addCase(fetchMessages.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                success: false,
                error: true
            }
        })
    }
})

export const fetchMessages = createAsyncThunk(
    "messages",
    async ({ chatId }, thunkAPI) => {
        try {
            console.log('chat id to be fetched =', chatId);
            const response = await fetchMessagesByChat(chatId)
            console.log('messages = ', response.data);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 300 })
        }
    }
)

export default MessagesSlice.reducer