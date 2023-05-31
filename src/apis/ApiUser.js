import Axios from "axios"
import { baseApiUrl } from "../common/config/config"

export const POSTUser = async (userParam) => {
  try {
    const createAdmin = await Axios.post(baseApiUrl + "/user", {
      userData: userParam
    })
    return createAdmin.data
  } catch (error) {
    console.warn("POSTUser[error]: ", error)
    return error.response.data;
  }
}


export const GETUsers = async () => {
  try {
    const fetchUserList = await Axios.get(baseApiUrl + "/user", {})
    return fetchUserList.data;
  } catch (error) {
    console.warn("GETUsers[error]: ", error)
    return error.response.data;
  }
}

export const PATCHUserActive = async (params) => {
  try {
    const updateUserAct = await Axios.patch(baseApiUrl + "/user", {
      toggleData: params
    })
    return updateUserAct.data
  } catch (error) {
    console.warn("PATCHUserActive[error]: ", error)
    return error.response.data;
  }
}