import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key: '99bb46cf2ebc45d49f0560519e1b7669'
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