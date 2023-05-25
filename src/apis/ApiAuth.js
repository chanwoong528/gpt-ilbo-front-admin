import Axios from "axios"
import { baseApiUrl } from "../common/config/config"

export const POSTLogin = async (userParam) => {
  try {
    const loginUser = await Axios.post(baseApiUrl + "/auth", {
      userData: userParam
    })
    return loginUser.data

  } catch (error) {
    console.warn("POSTLogin[error]: ", error)
    return error.response.data;
  }
}
export const GETLoginStatus = async (token) => {
  try {

    const loginStatus = await Axios.get(baseApiUrl + "/auth", {
      params: { token: token }
    })
    console.log(loginStatus)
    return loginStatus.data;
  } catch (error) {
    console.warn("GETLoginStatus[error]: ", error)
    return error.response.data;
  }
}