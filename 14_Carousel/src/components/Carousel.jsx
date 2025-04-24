import { useEffect, useState } from "react"
import Indicators from "./Indicators"
import Slide from "./Slide"

function Carousel({ imageUrls }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [manualChange, setManualChange] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
        if (!manualChange) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
        }

        setManualChange(false)
    }, 5000)

    return () => clearInterval(interval)
  }, [manualChange, imageUrls.length])

  const goPrev = () => {
    setManualChange(true)
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length)
  }

  const goNext = () => {
    setManualChange(true)
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
  }

return (
    <div className="carousel">
            {imageUrls.map((url, index) => (
                    <Slide
                            key={index}
                            url={url}
                            isActive={activeIndex === index}
                    />
            ))}
            <Indicators
                    activeIndex={activeIndex}
                    length={imageUrls.length}
            />
            <button
                className="carousel-button prev"
                onClick={goPrev}
            >&lt;</button>
            <button
                className="carousel-button next"
                onClick={goNext}
            >&gt;</button>
    </div>
)
}

export default Carousel