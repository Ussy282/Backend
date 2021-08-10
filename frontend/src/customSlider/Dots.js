import React from 'react'

const Dots = ({ activeIndex, onclick, imageSlide}) => {
    console.log(imageSlide)
    return(
        <div className="all-dots">
            {
                imageSlide.map((slide,index) => (
                    <div key={index} className={`${activeIndex === index ? "dot active" : "dot"}`} onClick={() => onclick(index)}/>
                ))
            }
        </div>
    )
}

export default Dots