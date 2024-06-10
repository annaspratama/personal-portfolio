import axios from "axios"
import { host, headers } from "./host.service"

/**
 * Retrieves the recent projects from the API.
 *
 * @return {Promise<Array>} An array of recent projects.
 * @throws {Error} If there is an error retrieving the projects.
 */
const recentLimitProjects = async () => {
    try {
        const response = await axios.get(`${host}/projects?type=recent`, { headers })
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

/**
 * Retrieves the all projects from the API.
 *
 * @return {Promise<Array>} An array of all projects.
 * @throws {Error} If there is an error retrieving the all projects.
 */
const projects = async (page) => {
    try {
        const response = await axios.get(`${host}/projects?page=${page}`, { headers })
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export { recentLimitProjects, projects }