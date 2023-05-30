import Axios from "axios"
import { baseApiUrl } from "../common/config/config"

export const POSTPrompt = async (prompt) => {
  try {
    console.log("!!!   ", prompt)
    const createPrompt = await Axios.post(baseApiUrl + "/gpt", {
      prompt: prompt
    })
    console.group(createPrompt.data)
    return createPrompt.data
  } catch (error) {
    console.warn("POSTPrompt[error]: ", error)
    return error.response.data;
  }
}
