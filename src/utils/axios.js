import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOIT,
  withCredentials: false,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})
instance.interceptors.response.use(
  async (response) => {
    if (response.data.code === process.env.REACT_APP_SUCCESS_CODE) {
      return await response.data.dataResult;
    }
    else {
      return null;
    }
  }, function (error) {
    return Promise.reject(error);
  }
);
export default instance;