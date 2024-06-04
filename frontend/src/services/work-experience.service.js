import axios from "axios"
import { host, headers } from "./host.service"

/**
 * Retrieves the work experiences from the server and invokes the provided callback function.
 *
 * @param {function} callback - The callback function to be invoked with the result of the API call. It should accept two parameters: a boolean indicating the success of the API call, and the response data if successful, or the error object if unsuccessful.
 * @return {void} This function does not return a value.
 */
const getWorkExperiences = (callback) => {
    axios.get(`${host}/work-experiences`, { headers })
    .then((res) => {
        callback(true, res.data)
    })
    .catch((err) => callback(false, err))
}

export default getWorkExperiences