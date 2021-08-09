import Axios from "./api/apiService";
import { AxiosResponse } from "axios";

export async function getData(token : string, url : string){
  let data : object | null = null, error : object | null = null;
  try {
    const response : AxiosResponse = await Axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    data = response.data;
  }
  catch (e) {
    error = e;
  }
  return {
    data,
    error
  }
}