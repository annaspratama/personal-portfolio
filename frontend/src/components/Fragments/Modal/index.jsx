import { useEffect, useState } from "react"
import { projectDetail } from "../../../services/project.service"
import Carousel from "../Carousel"


const ModalButton = (props) => {

    const { projectId, buttonTitle } = props
    const [showModal, setShowModal] = useState(false)
    const [projectDetailData, setProjectDetailData] = useState({})
    const [images, setImages] = useState([])
    const [stacks, setStacks] = useState([])

    useEffect(() => {
        if (showModal && (projectId > 0)) {
            projectDetail(projectId).then(res => {

                if (res.status === 200) {
                    setProjectDetailData(res.data)

                    if (images.length === 0) {
                        const imgs = []

                        res.data.images.map(img => imgs.push(img.image))

                        setImages(imgs)
                    }

                    if (stacks.length === 0) {
                        const stacks = []

                        res.data.stacks.map(stc => stacks.push(stc.name))

                        setStacks(stacks)
                    }

                    setShowModal(true)
                }
            }).catch(err => {
                console.error(err)
                setShowModal(false)
                throw err
            })
        }

    }, [showModal, projectId, images, stacks])


    return (
        <>
            <button
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
                type="button"
                onClick={() => setShowModal(true)}
            >
                {buttonTitle}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M17.5 11.667v-5h-5" />
                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-6">
                        <div className="relative w-full h-full my-6 mx-auto max-w-5xl">
                            {/* Content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* Header */}
                                <div className="items-center text-center border-b border-solid border-blueGray-200 bg-primary rounded-t">
                                    <h3 className="text-center mt-5 text-2xl text-white font-semibold">
                                        {projectDetailData.title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/* Body */}
                                <div className="flex flex-col relative p-6">
                                    <div className="flex flex-col w-full justify-center mb-10">

                                        <Carousel autoSlide={true} >
                                            {images.length > 0 ?
                                                [...images.map((img, index) => (
                                                    <img key={index} src={img} alt={projectDetailData.title} className="w-full h-full object-flli" />
                                                ))] :
                                                []
                                            }
                                        </Carousel>

                                        <div className="mt-5">
                                            <div className="justify-start mt-2 mb-5 gap-2">
                                                <h3 className="text-muted text-lg font-semibold">{projectDetailData.company}</h3>
                                                <div className="flex gap-2">
                                                    <p className="text-muted text-sm">{projectDetailData.position}</p>
                                                    <p className="text-muted text-sm">({projectDetailData.start_year} - {projectDetailData.end_year === 0 ? "Present" : projectDetailData.end_year})</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-0.5 bg-slate-300 my-2" />
                                            <div className="text-justify mt-5">
                                                <p className="text-muted">
                                                    {projectDetailData.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Stacks */}
                                    <div className="flex justify-center">
                                        <div className="w-2/3 border-2 border-slate-300 rounded-xl shadow bg-primary text-muted text-white lg:text-sm m:text-m text-center ">
                                            <h3 className="text-xl text-white mt-2 mb-2 font-bold">{projectDetailData.stack_type}</h3>
                                            <div className="w-full h-0.5 bg-slate-300 my-2" />
                                            <div className="inline-flex flex-wrap text-sm text-muted justify-center text-gray-600 mb-2">
                                                {stacks.map((stack_name, index) => (
                                                    <div key={index} className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                        {stack_name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="flex items-center bg-primary justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 border rounded-lg bg-slate-200 hover:bg-slate-300 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default ModalButton