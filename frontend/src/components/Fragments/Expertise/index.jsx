import { useEffect, useState } from "react"
import getExpertise from "../../../services/expertise.service"
import ExpertiseItem from "./ExpertiseItem"

const defaultExpertise = []

const Expertise = () => {

    const [expertise, setExpertise] = useState(defaultExpertise)

    useEffect(() => {
        getExpertise().then(res => {
            setExpertise(res)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-semibold dark:text-light">Expertise</h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5 sm:grid-cols-2">
                {expertise.length > 0 &&
                    expertise.map((expertise) => (
                        <ExpertiseItem key={expertise.id} title={expertise.programming_language} framework={expertise.framework} image={expertise.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default Expertise