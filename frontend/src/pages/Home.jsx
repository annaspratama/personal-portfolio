import BaseLayout from "../components/Layouts/BaseLayout"
import Intro from "../components/Fragments/Intro"
import ProjectRecent from "../components/Fragments/ProjectRecent"
import Experience from "../components/Fragments/Experience"
import Contact from "../components/Fragments/Contact"
import Service from "../components/Fragments/Service"
import Expertise from "../components/Fragments/Expertise"

const Home = () => {
    return (
        <BaseLayout menuactive="home">
            {/* Intro */}
            <Intro />

            <div className="grid grid-cols-1 gap-4 lg:gap-6">

                {/* Expertise */}
                <Expertise />

                {/* Work Experience */}
                <Experience />

            </div>

            {/* Projects */}
            <ProjectRecent />

            {/* Services */}
            <Service />

            {/* Contact */}
            <Contact />
        </BaseLayout>
    )
}

export default Home