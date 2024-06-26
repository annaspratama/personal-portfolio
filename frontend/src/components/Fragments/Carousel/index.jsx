import React, { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

/**
 * Renders a carousel component with sliding functionality.
 *
 * @param {Object} children - The slides to be displayed in the carousel.
 * @param {boolean} autoSlide - Flag indicating if the carousel should auto slide.
 * @param {number} autoSlideInterval - The interval for auto-sliding in milliseconds.
 * @return {JSX.Element} The carousel component.
 */
const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = useCallback(() => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }, [slides.length])

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, next])


    return (
        <div className="overflow-hidden relative rounded-lg border border-gray-300 shadow">
            <div className="flex transition-transform ease-out duration-500 h-custom-550 w-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            {slides.length <= 1 ? null :
                <div className="absolute inset-0 flex items-center justify-between">
                    <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                        <ChevronLeft />
                    </button>
                    <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                        <ChevronRight />
                    </button>
                </div>
            }

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Carousel