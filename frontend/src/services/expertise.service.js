import axios from "axios"
import { host, headers } from "./host.service"

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