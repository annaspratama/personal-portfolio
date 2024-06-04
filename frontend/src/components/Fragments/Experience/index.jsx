import { useEffect, useState } from "react"
import getWorkExperiences from "../../../services/work-experience.service"
import { ExperienceItem, ExperienceItemDefault } from "./ExperienceItem"

const defaultWorkExperiences = []

const Experience = () => {

    const [workExperiences, setWorkExperiences] = useState(defaultWorkExperiences)

    useEffect(() => {
        getWorkExperiences((success, result) => {
            if (success) setWorkExperiences(result)
        })
    }, [])

    return (
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
            <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
                Work Experience
            </h3>

            <div
                className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    {workExperiences.map((workExperience, index) => (
                        <ExperienceItemDefault startYear={workExperience.start_year} endYear={workExperience.end_year} company={workExperience.company} position={workExperience.title} image={workExperience.image} />
                    ))}
                </div>

                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    {workExperiences.length > 0 &&
                        workExperiences.map((workExperience) => (
                            <ExperienceItem startYear={workExperience.start_year} endYear={workExperience.end_year} company={workExperience.company} position={workExperience.title} image={workExperience.image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience