import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonApi"

export const registerGrievanceAPI = async (reqBody)=>{
    return await commonAPI('POST', `${serverUrl}/grievancefileing`, reqBody,"")
}

