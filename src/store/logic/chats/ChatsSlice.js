import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllChats } from "./ChatsAPI";

const chatsSlice = createSlice({
    name: 'chatsSlice',
    initialState: {
        loading: true,
        error: false,
        success: false,
        chats: [],
        pageNumber: 0,
        lastPageNumber: 0
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChats.pending, (state, action) => {
            return { ...state, loading: true }
        });
        builder.addCase(fetchChats.fulfilled, (state, action) => {
            console.log('payload', action.payload);
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                chats: action.payload.current_page === 1 ? action.payload.data : [...state.chats, ...action.payload.data],
                pageNumber: action.payload.current_page,
                lastPageNumber: action.payload.last_page
            }
        });
        builder.addCase(fetchChats.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: true,
            }
        })
    }
})

export const fetchChats = createAsyncThunk(
    "chats",
    async ({ pageNumber }, thunkAPI) => {
        console.log('action called', pageNumber);
        try {
            const response = await fetchAllChats(pageNumber)
            return response.data.data
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 300 })
        }
    }
)

export default chatsSlice.reducer