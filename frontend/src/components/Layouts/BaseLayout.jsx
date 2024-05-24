import Footer from "../Fragments/Footer"
import Header from "../Fragments/Header"
import MobileMenu from "../Fragments/MobileMenu"


const BaseLayout = (props) => {

    const { children, menuactive } = props

    return (
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">

            {/* Header */}
            <Header menuactive={ menuactive } />

            {/* Mobile menu */}
            <MobileMenu />

            {/* Main */}
            <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                { children }
            </main>

            {/* Footer */}
            <Footer />

            <div class="shapes">
                <div class="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
                    <img src="./assets/images/gradient-1.png" alt="" class="" />
                </div>

                <div class="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
                    <img src="./assets/images/gradient-2.png" alt="" class="" />
                </div>

                <div class="move-with-cursor fixed left-[10%] top-[20%] -z-10">
                    <img src="./assets/images/object-3d-1.png" alt="" class="" />
                </div>

                <div class="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
                    <img src="./assets/images/object-3d-2.png" alt="" class="" />
                </div>
            </div>
        </div>
    )
}

export default BaseLayout