import { hostDefault } from "../../../services/host.service"

const ProjectRecentItem = (props) => {

    const { title, image } = props

    return (
        <div
            className="group relative overflow-hidden rounded-lg bg-light dark:bg-dark-2">
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img src={`${hostDefault}${image}`} alt={`Img of ${title}`}
                    className="h-full w-full rounded-t-lg object-cover object-top transition" />
            </div>

            <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                    {title}
                </span>
            </div>
        </div>
    )
}

export default ProjectRecentItem