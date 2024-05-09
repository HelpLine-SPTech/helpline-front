import axios from "axios";

export const openCepApi = axios.create({
  baseURL: 'https://opencep.com/v1/'
})