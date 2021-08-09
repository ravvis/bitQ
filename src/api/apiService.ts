import axios, { AxiosInstance }  from 'axios'

const baseURL : string = "https://api.bitbucket.org/2.0/";

const Axios : AxiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default Axios;