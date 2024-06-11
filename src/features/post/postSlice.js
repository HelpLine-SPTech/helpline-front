import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";
import counterSlice from "../counter/counterSlice";

const initialState = {
    posts: []
}

export const getPosts = createAsyncThunk(
    'posts/list',
    async (body) => {
        const response = await api.get(`/posts`)
            .then(res => res.data)

        return response
    }
)


export const createPosts = createAsyncThunk(
    'posts/create',
    async (body) => {
        debugger
        const response = await api.post(`/posts`, body)
            .then(res => res.data)
        return response
    }
)

export const likePosts = createAsyncThunk(
    'posts/like',
    async (body) => {
        const response = await api.post(`/posts/${body.id}/like`)
            .then(res => res.data)
        return response
    }
)


export const commentPosts = createAsyncThunk(
    'posts/comment',
    async (body) => {
        const response = await api.post(`/posts/${body.id}/comment?content=${body.content}`)
            .then(res => res.data)
        return response
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state) => {
            api.get(`/posts`)
            .then(res => {
                debugger
                const response = res.data
                state.posts = response.posts
            })
        }
    },
    extraReducers: {}
})

export const selectPosts = (state) => state.posts.posts

export const { fetchPosts } = postsSlice.actions

export default postsSlice.reducer