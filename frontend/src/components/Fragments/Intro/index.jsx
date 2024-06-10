import { useState, useEffect } from "react"
import aboutDetail from "../../../services/about.service"
import { hostDefault } from "../../../services/host.service"

const defaultAbout = {}

const Intro = (props) => {

    const { addClassname } = props
    const [about, setAbout] = useState(defaultAbout)

    useEffect(() => {
        aboutDetail((success, result) => {
            if (success) setAbout(result)
        })
    }, [])

    return (
        <div className="">
            <div className={`rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark ${addClassname}`}>
                <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
                    <img src={`${hostDefault}/${about.image}`} alt="Img Profile"
                        className="inline-block h-full w-full scale-110 object-contain object-bottom" />
                </div>

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold dark:text-light">
                        {about.title}
                    </h3>
                    <div className="mt-2 text-muted dark:text-light/70">
                        {/* <div dangerouslySetInnerHTML={{ __html: about.description }} /> */}
                        {/* Butuh 520 karakter lagi. */}
                        A Passionate
                        <span className="font-semibold text-dark dark:text-white mx-1">
                            Back End Developer
                        </span>
                        &
                        <span className="font-semibold text-dark dark:text-white mx-1">
                            Full Stack Developer
                        </span>
                        🖥️ having
                        <span className="font-semibold text-dark dark:text-white mx-1"> 4+ years </span> in Web Development.
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        <a href={`https://wa.me/${about.phone}`}
                            target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipule="evenodd" />
                                <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                            </svg>

                            <span>WhatsApp</span>
                        </a>
                        <button type="button" data-clipboard-text={about.email}
                            data-clipboard-action="copy" data-clipboard-success-text="Copied to clipboard"
                            className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                className="h-6 w-6">
                                <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                            </svg>
                            <span>Copy Email</span>

                            <span
                                className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                                role="tooltip">
                                Copied to clipboard
                            </span>
                        </button>
                    </div>

                    {/* Social */}
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        <a href="/#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="h-6 w-6">
                                <path
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z" />
                            </svg>
                        </a>
                        <a href="/#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="h-6 w-6">
                                <path
                                    d="M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.74 3.74 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.862 2.862 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903l-.002-.001Z" />
                            </svg>
                        </a>
                        <a href="/#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="h-6 w-6">
                                <path
                                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                            </svg>
                        </a>
                        <a href="/#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="h-6 w-6">
                                <path
                                    d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro