import { useState } from "react"

const ModalButton = (props) => {

    const { buttonTitle, modalTitle, children,
        // data = {
        //     id: null,
        //     method: "GET",
        //     url: null,
        //     body: null,
        // }
    } = props

    const [showModal, setShowModal] = useState(false);

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
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-5xl">
                            {/* Content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* Header */}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 bg-primary rounded-t">
                                    <h3 className="flex text-2xl text-white justify-center font-semibold">
                                        {modalTitle}
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
                                        {children}
                                    </div>
                                    {/* Stacks */}
                                    <div className="flex justify-center">
                                        <div className="w-2/3 border-2 border-slate-300 rounded-xl shadow bg-primary text-muted text-white lg:text-sm m:text-m text-center ">
                                            <h3 className="text-xl text-white mt-2 mb-2 font-bold">Back End Stacks</h3>
                                            <div class="w-full h-0.5 bg-slate-300 my-2" />
                                            <div className="inline-flex flex-wrap text-sm text-muted justify-center text-gray-600 mb-2">
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    PHP Laravel
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Node Express JS
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Python Django
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Node Express JS
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Node Express JS
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Node Express JS
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Node Express JS
                                                </div>
                                                <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                                                    Node Express JS
                                                </div>
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