import Intro from "../components/Fragments/Intro"
import Project from "../components/Fragments/Project"
import BaseLayout from "../components/Layouts/BaseLayout"

const Portfolio = () => {

    return (
        <BaseLayout menuactive="portfolio">
            {/* Intro */}
            <Intro addClassname="lg:sticky lg:top-24" />

            {/* Portfolio */}
            <Project />
        </BaseLayout>
    )
}

export default Portfolio