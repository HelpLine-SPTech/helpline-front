import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";

export const getJobs = createAsyncThunk("jobs/list", async (body) => {
  const response = await api
    .get(`/jobs?page=${body.page}&size=${body.pageSize}&desc=${body.desc}`)
    .then((res) => res.data);

  return response;
});

export const getAll = createAsyncThunk("jobs/all", async (body) => {
  const response = await api.get(`/jobs/all`).then((res) => res.data);

  return response;
});

export const getById = createAsyncThunk("jobs/get", async (id) => {
  const response = await api.get(`/jobs/${id}`).then((res) => res.data);
  return response;
});

export const addJob = createAsyncThunk("jobs/add", async (body) => {
  const response = await api.post(`/jobs`, body).then((res) => res.data);
  return response;
});

export const updateJob = createAsyncThunk("jobs/update", async (body) => {
  const response = await api
    .put(`/jobs/${body.jobId}`, body)
    .then((res) => res.data);
  return response;
});

export const subscribe = createAsyncThunk("jobs/subscribe", async (body) => {
  const response = await api
    .post(`/jobs/${body.jobId}/subscribe`)
    .then((res) => res.data)
    .catch(res => res.response.data);
  
  console.log(response);


  return response;
});
