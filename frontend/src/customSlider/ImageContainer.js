import React from 'react'

const ImageContainer =({imageSlide, activeIndex}) => {
    console.log(imageSlide)
    return(
        <div className="slides">
            {
                imageSlide.map((slide, index) => (
                    <div key={index} className={activeIndex === index ? "slides" : "inactive"}>
                        <img className="slide-image" src={slide.src} alt={slide.title} />
                        <span className="slide-title">{slide.title}</span>
                        <span className="slide-text">{slide.description}</span>
                     </div>
                ))
            }
        </div>
    )
}

export default ImageContainer;