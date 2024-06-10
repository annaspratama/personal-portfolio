import { useEffect, useState } from "react"
import Carousel from "../Carousel"
import ModalButton from "../Modal"
import Pagination from "../Pagination"
import aboutDetail from "../../../services/about.service"
import { projects } from "../../../services/project.service"
import StackItem from "./StackItem"

const defaultAbout = []
const defaultProjectsData = []
const defaultPageSize = 3

const Project = () => {
    const buttonTitle = "View Details"
    const [about, setAbout] = useState(defaultAbout)
    const [projectsData, setProjectsData] = useState(defaultProjectsData)
    const [count, setCount] = useState(0)
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(defaultPageSize)

    useEffect(() => {
        aboutDetail((success, result) => {
            if (success) setAbout(result)
        })
    }, [])

    useEffect(() => {
        projects(page).then(res => {

            if (res.results.length > 0) {
                setProjectsData(res.results)
                if (res.count > 0) setCount(res.count)
                setNext(res.next)
                setPrevious(res.previous)
                // setPageSize(res.results.length)
            }
        }).catch(err => {
            console.error(err)
        })
    }, [page])

    const handleNext = () => {
        if (next) setPage(page + 1)
    }

    const handlePrevious = () => {
        if (previous) setPage(page - 1)
    }

    const totalPages = Math.ceil(count / pageSize)

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    // const slides = [
    //     "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
    //     "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
    //     "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
    //     "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
    //     "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
    // ]

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="">
                <h2 className="text-xl font-semibold leading-tight text-dark dark:text-light lg:text-3xl lg:leading-tight">
                    Check Out My Latest <span className="text-primary">Projects</span>
                </h2>
                <p className="mt-4 text-m text-muted text-justify dark:text-light/70">
                    {about.brand_profile}
                </p>
            </div>

            {/* Portfolio */}
            <div className="mt-5 lg:mt-5">
                {/* Project */}
                <div className="mt-6 space-y-6">
                    {projectsData.length > 0 &&
                        projectsData.map((project, _) => (
                            <div key={project.id}>
                                <div className="">
                                    <div className="group relative overflow-hidden rounded-lg bg-light border shadow border-gray-300 mt-10">
                                        <img src={
                                            project.images.length > 0 ?
                                                project.images[0].image :
                                                undefined
                                        } alt={project.title} className="h-full w-full rounded-t-lg object-cover object-top transition" />
                                    </div>

                                    <div className="flex flex-wrap items-start py-4 md:p-6">
                                        <div className="flex flex-col w-full">
                                            <h3 className="text-lg font-medium md:text-xl lg:text-3xl ml-2 mb-2">
                                                {project.title}
                                            </h3>
                                            <h4 className="text-lg mt-2 ml-2 font-semibold">{project.stack_type}</h4>
                                            <div className="flex">
                                                <div className="flex flex-wrap w-full text-center">
                                                    {project.stacks.length > 0 &&
                                                        project.stacks.slice(0, 5).map((stack) => (
                                                            <StackItem key={stack.id} name={stack.name} />
                                                        )
                                                        )}
                                                </div>
                                                <div className="flex w-1/3 justify-end">
                                                    <ModalButton buttonTitle={buttonTitle} modalTitle={project.title} >

                                                        <Carousel autoSlide={true} >
                                                            {project.images.length > 0 &&
                                                                [...project.images.map((img, _) => (
                                                                    <img key={img.id} src={img.image} alt={project.title} />
                                                                )),]}
                                                        </Carousel>

                                                        <div className="mt-5">
                                                            <p className="text-muted text-justify">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                            </p>
                                                        </div>
                                                    </ ModalButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-0.5 bg-slate-300 my-2" />
                            </div>
                        ))
                    }
                </div>

                {/* Pagination */}
                <Pagination handleNext={handleNext} handlePrevious={handlePrevious} next={next} previous={previous} totalPages={totalPages} page={page} handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default Project