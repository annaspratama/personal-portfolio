import axios from "axios"
import { host, headers } from "./host.service"

/**
 * Retrieves expertise data from the server.
 *
 * @return {Promise<Object>} A promise that resolves to the expertise data.
 * @throws {Error} If there is an error retrieving the expertise data.
 */
const getExpertise = async () => {
    try {
        const response = await axios.get(`${host}/expertise`, { headers })
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export default getExpertise