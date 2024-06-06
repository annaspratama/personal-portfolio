const ExpertiseItem = (props) => {

    const { title, framework, image } = props
    return (
        <div className="text-center">
            <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src={image} alt={`${title} - ${framework}`} />
            </div>
            <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                {title} {framework}
            </p>
        </div>
    )
}

export default ExpertiseItem