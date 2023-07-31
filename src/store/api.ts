import axios from "axios";


const baseURL = import.meta.env.VITE_API_URL;

export const API = axios.create({
  baseURL,
  headers:{
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials:true
});
