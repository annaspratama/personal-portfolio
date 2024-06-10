import AboutDetail from "../components/Fragments/AboutDetail"
import Intro from "../components/Fragments/Intro"
import BaseLayout from "../components/Layouts/BaseLayout"

const About = () => {
    return (
        <BaseLayout menuactive="about">
            {/* Intro */}
            <Intro addClassname="lg:sticky lg:top-24" />

            {/* About */}
            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10 max-h-[602px]">
                <AboutDetail />

                {/* <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
                    <div className="flex flex-wrap items-start gap-6 lg:gap-10">
                        <div className="">
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                <span>40</span>+
                            </h2>
                            <p className="mt-2 text-muted">Year of Experience</p>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                <span>86</span>+
                            </h2>
                            <p className="mt-2 text-muted">Project Completed</p>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                <span>72</span>+
                            </h2>
                            <p className="mt-2 text-muted">Happy Client</p>
                        </div>
                    </div>

                    <div className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
                        <img src="assets/img/circle-text.svg" alt="" className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden" />
                        <img src="assets/img/circle-text-light.svg" alt="" className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block" />
                        <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10">
                                <path d="M20 5v30m-5-5 5 5 5-5" />
                            </svg>
                        </div>
                    </div>
                </div> */}

                {/* Brands */}
                {/* <div className="mt-10 lg:mt-14">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Working With 50+ Brands ✨ Worldwide
                    </h3>
                    <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/zeplin.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/figma.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/zeplin.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/figma.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="assets/img/framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                    </div>
                </div> */}
            </div>
        </ BaseLayout>
    )
}

export default About