import { useEffect, useState } from "react"
import { recentLimitProjects } from "../../../services/project.service"
import ProjectRecentItem from "./ProjectRecentItem"
import { Link } from "react-router-dom"

const defaultRecentProjects = []

/**
 * Renders a component that displays recent projects.
 *
 * @return {JSX.Element} The rendered component.
 */
const ProjectRecent = () => {

    const [projects, setProjects] = useState(defaultRecentProjects)

    useEffect(() => {
        recentLimitProjects().then(res => {
            setProjects(res)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
                <Link to="/portfolio"
                    className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                    <span>All Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
                    </svg>
                </Link>
            </div>

            <div className="mt-6 space-y-6">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectRecentItem key={project.id} title={project.title} image={project.image} />
                ))}
            </div>
        </div>
    )
}

export default ProjectRecent