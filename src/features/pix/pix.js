import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";

const initialState = {
    qrCode: ""
}

export const createDonation = createAsyncThunk(
    'donations/create',
    async (body) => {
        const response = await api.post('/donations', {
            amount: body.amount,
            campaignId: body.campaignId,
        }).then(res => res.data)

        return response
    }
)