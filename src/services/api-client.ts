import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key: '00eeb2404ffb4139b1cb2be122d87521'
  }
})

class APICLENT<T> {
  endPoint: string;

  constructor(endpoint : string){
    this.endPoint = endpoint;
  }

  getAll(config : AxiosRequestConfig){
    return axiosInstance.get<FetchResponse<T>>(this.endPoint , config)
    .then( res => res.data);
  }
}

export default APICLENT;