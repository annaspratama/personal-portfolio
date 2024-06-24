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
            </div>
        </ BaseLayout>
    )
}

export default About