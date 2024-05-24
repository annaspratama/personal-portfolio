const Expertise = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-semibold dark:text-light">Expertise</h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src="./assets/images/figma.svg" alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                        Figma
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src="./assets/images/notion.svg" alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                        Notion
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src="./assets/images/mico.svg" alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                        Mico
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src="./assets/images/framer.svg" alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                        Framer
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src="./assets/images/webflow.svg" alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                        Webflow
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src="./assets/images/zeplin.svg" alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                        Zeplin
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Expertise