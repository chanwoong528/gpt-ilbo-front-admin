import Axios from "axios"
import { baseApiUrl } from "../common/config/config"

export const POSTCate = async (cateParams) => {
  try {
    const createCate = await Axios.post(baseApiUrl + "/category", {
      cateData: cateParams
    })
    return createCate.data
  } catch (error) {
    console.warn("POSTUser[error]: ", error)
    return error.response.data;
  }
}


export const GETCates = async () => {
  try {
    const fetchUserList = await Axios.get(baseApiUrl + "/category", {})
    return fetchUserList.data;
  } catch (error) {
    console.warn("GETUsers[error]: ", error)
    return error.response.data;
  }
}
