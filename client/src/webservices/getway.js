import axios from "axios";

/**
 * Axios client instance with a base URL and default timeout.
 */
export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_ENDPOINT_URL,
    timeout: 10000, // default timeout: 10 seconds
});

/**
 * Handles all API requests in a unified way.
 * 
 * @async
 * @function apiRequestHandler
 * @param {string} [method="get"] - HTTP method (GET, POST, PUT, PATCH, DELETE).
 * @param {string} url - The endpoint URL (relative to baseURL).
 * @param {Object} [data={}] - Request body data (used for POST, PUT, PATCH).
 * @param {Object} [params={}] - URL query parameters (used for GET or others).
 * @param {Object} [headers={}] - Custom headers (e.g., Authorization).
 * @param {number} [timeout=10000] - Request timeout in milliseconds.
 * 
 * @returns {Promise<Object>} Resolves with:
 * - `{ success: true, status: number, data: any }` on success.
 * - `{ success: false, status: number, message: string, data?: any }` on failure.
 * 
 * @example
 * // Example 1: GET request with params
 * const res = await apiRequestHandler(
 *   method: "get",
 *   url: "/users",
 *   params: { page: 1, limit: 10 }
 * );
 * 
 * @example
 * // Example 2: POST request with data
 * const res = await apiRequestHandler(
 *   method: "post",
 *   url: "/auth/login",
 *   data: { email: "test@example.com", password: "12345" }
 * );
 * 
 * @example
 * // Example 3: PUT request with headers
 * const res = await apiRequestHandler(
 *   method: "put",
 *   url: "/users/1",
 *   data: { name: "Krishna" },
 *   headers: { Authorization: "Bearer token_here" }
 * );
 */
export default async function apiRequestHandler(
    method = "get",
    url,
    data = {},
    params = {},
    headers = {},
    timeout,
) {
    let token = window.localStorage.getItem("token")
    try {
        const config = {
            method: method.toLowerCase(),
            url,
            params,
            headers: {
                ...headers,
                "Authorization": `Bearer ${token}`
            },
            timeout: timeout || 10000,
        };

        // Only attach data for methods that allow a request body
        if (!["get", "delete"].includes(method.toLowerCase())) {
            config.data = data;
        }

        const res = await axiosClient(config);

        return res.data;
    } catch (error) {
        return {
            success: false,
            status: error.response?.status || 500,
            message:
                error.response?.data?.message ||
                error.message ||
                "Something went wrong",
            data: error.response?.data || null,
        };
    }
}