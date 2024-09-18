import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key: '99bb46cf2ebc45d49f0560519e1b7669'
  }
})