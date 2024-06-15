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

/**
 * Retrieves the details of a project from the API.
 *
 * @param {number} id - The ID of the project.
 * @return {Promise<Object>} The details of the project.
 * @throws {Error} If there is an error retrieving the project details.
 */
const projectDetail = async (id) => {
    try {
        const response = await axios.get(`${host}/${id}/project`, { headers })
        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export { recentLimitProjects, projects, projectDetail }