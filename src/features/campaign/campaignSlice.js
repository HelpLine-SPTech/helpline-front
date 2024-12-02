import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";

export const getCampaigns = createAsyncThunk("campaigns/list", async (body) => {
    const response = await api
        .get(`/campaigns?page=${body.page}&size=${body.pageSize}&desc=${body.desc}`)
        .then((res) => res.data);

    return response;
});

export const addCampaign = createAsyncThunk("campaigns/add", async (body) => {
    const response = await api.post(`/campaigns`, body).then((res) => res.data)
    return response
})