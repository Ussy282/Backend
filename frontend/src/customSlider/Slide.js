import React, { useEffect, useState } from 'react'
import Arrows from './Arrows'
import Dots from './Dots'
import ImageContainer from './ImageContainer'
import { imageSlide } from './ImageSlider'
import "./slide.css"

const len = imageSlide.length + 1;

const Slide =() => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() =>{
    const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    },3000)
    return() => {
        clearInterval (interval)
    }
}, [activeIndex])

    return (
        <div className="slide-container">
            <ImageContainer activeIndex={activeIndex} imageSlide={imageSlide} />
            <Arrows prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}
            nextSlide={() =>setActiveIndex(activeIndex === len ? 0 : activeIndex + 1 )} />
            <Dots imageSlide={imageSlide} activeIndex={activeIndex} onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slide;