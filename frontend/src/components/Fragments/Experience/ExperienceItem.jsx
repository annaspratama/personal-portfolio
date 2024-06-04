const ExperienceItem = (props) => {

    const { startYear, endYear, company, position, image } = props

    return (
        <div className="flex flex-col gap-1 md:flex-row md:gap-10">
            <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                {startYear} - {endYear === 0 ?
                    "Now" : endYear
                }
            </p>
            <div className="flex items-center gap-3">
                <div
                    className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src={image} alt="" className="h-5 w-5" />
                </div>
                <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        {company}
                    </h6>
                    <p className="text-sm text-muted">
                        {position}
                    </p>
                </div>
            </div>
        </div>
    )
}

const ExperienceItemDefault = (props) => {

    const { startYear, endYear, company, position, image } = props

    return (
        <div className="flex flex-col gap-1 md:flex-row md:gap-10">
            <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                {startYear} - {endYear === 0 ?
                    "Now" : endYear
                }
            </p>
            <div className="flex items-center gap-3">
                <div
                    className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src={image} alt="" className="h-5 w-5" />
                </div>
                <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        {company}
                    </h6>
                    <p className="text-sm text-muted">
                        {position}
                    </p>
                </div>
            </div>
        </div>
    )
}

export { ExperienceItem, ExperienceItemDefault }