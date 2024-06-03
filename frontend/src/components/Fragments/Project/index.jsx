import Carousel from "../Carousel"
import ModalButton from "../Modal"
import Pagination from "../Pagination"

const Project = () => {
    const buttonTitle = "View Details"

    const slides = [
        "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
        "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
        "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
        "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
        "https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png",
    ]

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="">
                <h2 className="text-xl font-semibold leading-tight text-dark dark:text-light lg:text-3xl lg:leading-tight">
                    Check Out My Latest <span className="text-primary">Projects</span>
                </h2>
                <p className="mt-4 text-m text-muted dark:text-light/70">
                    I'm here to help if you're searching for a product designer to bring
                    your idea to life or a design partner to help take your business to the
                    next level.
                </p>
            </div>

            {/* Portfolio */}
            <div className="mt-5 lg:mt-5">
                {/* Project */}
                <div className="mt-6 space-y-6">
                    <div className="">
                        <div className="group relative overflow-hidden rounded-lg bg-light border shadow border-gray-300 mt-10">
                            <img src="https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png" alt="" className="h-full w-full rounded-t-lg object-cover object-top transition" />
                        </div>

                        <div className="flex flex-wrap items-start py-4 md:p-6">
                            <div className="flex flex-col w-full">
                                <h3 className="text-lg font-medium md:text-xl lg:text-3xl ml-2 mb-2">
                                    FlowSaaS - SaaS Application Tools 1
                                </h3>
                                <h4 className="text-lg mt-2 ml-2 font-semibold">Back End Stacks</h4>
                                <div className="flex">
                                    <div className="flex flex-wrap w-full text-center">
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            PHP Laravel
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Python Django
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 justify-end">
                                        <ModalButton buttonTitle={buttonTitle} modalTitle="FlowSaaS - SaaS Application Tools" >
                                            {/* <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0 mt-10"> */}
                                            {/* <div className="relative aspect-video overflow-hidden rounded-t-lg"> */}
                                            {/* <img src="https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png" alt="" className="h-full w-full rounded-t-lg object-cover object-top transition" />

                                                    <a href="https://annaspratama.my.id/media/images/2023-simonik-monitor-rapb.png" data-gall="project-gallry-1" className="venobox project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                                                            <path d="M10 4.167v11.666M4.167 10h11.666" />
                                                        </svg>
                                                    </a> */}

                                            <Carousel autoSlide={true} >
                                                {[...slides.map((s) => (
                                                    <img src={s} alt="Project name" />
                                                )), <video src="" autoPlay muted loop />]}
                                            </Carousel>

                                            {/* </div> */}
                                            {/* </div> */}
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

                    <div className="">
                        <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0 mt-10">
                            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                <img src="./assets/images/project-1.png" alt="" className="h-full w-full rounded-t-lg object-cover object-top transition" />

                                <a href="./assets/images/project-1.png" data-gall="project-gallry-1" className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-start py-4 md:p-6">
                            <div className="flex flex-col w-full">
                                <h3 className="text-lg font-medium md:text-xl lg:text-3xl ml-2 mb-2">
                                    FlowSaaS - SaaS Application Tools
                                </h3>
                                <h4 className="text-lg mt-2 ml-2 font-semibold">Back End Stacks</h4>
                                <div className="flex">
                                    <div className="flex flex-wrap w-full text-center">
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            PHP Laravel
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Python Django
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 justify-end">
                                        <ModalButton buttonTitle={buttonTitle} modalTitle="FlowSaaS - SaaS Application Tools" >
                                            <h3 className="text-m">Hello world.</h3>
                                        </ ModalButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-slate-300 my-2" />

                    <div className="">
                        <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0 mt-10">
                            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                <img src="./assets/images/project-1.png" alt="" className="h-full w-full rounded-t-lg object-cover object-top transition" />

                                <a href="./assets/images/project-1.png" data-gall="project-gallry-1" className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-start py-4 md:p-6">
                            <div className="flex flex-col w-full">
                                <h3 className="text-lg font-medium md:text-xl lg:text-3xl ml-2 mb-2">
                                    FlowSaaS - SaaS Application Tools
                                </h3>
                                <h4 className="text-lg mt-2 ml-2 font-semibold">Back End Stacks</h4>
                                <div className="flex">
                                    <div className="flex flex-wrap w-full text-center">
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            PHP Laravel
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Python Django
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
                                            Node Express JS
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 justify-end">
                                        <ModalButton buttonTitle={buttonTitle} modalTitle="FlowSaaS - SaaS Application Tools" >
                                            <h3 className="text-m">Hello world.</h3>
                                        </ ModalButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-slate-300 my-2" />
                </div>

                {/* Pagination */}
                <Pagination />
            </div>
        </div>
    )
}

export default Project