import endpointUrls from "../endpointUrls";
import apiRequestHandler from "../getway";

export async function getProfile() {
    let response = await apiRequestHandler("get", endpointUrls.ME);
    return response;
} 