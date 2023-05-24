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
  }

}