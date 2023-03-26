import React, { useState } from "react"

import commitment from "../../assets/aboutimages/commitment.png"
import leftarrow from "../../assets/aboutimages/left arrow.png"
import arrow from "../../assets/homeimages/vector.png"
import portfolio from "../../assets/aboutimages/portfolio.png"
import "./carousel.css"

const items=[{image:portfolio,header:"Commitment"},{image:commitment,header:"Accountability"},
                {image:commitment,header:"Efficiency"},{image:commitment,header:"Ideas"},
                {image:commitment,header:"Team Work"}
            ]

const CarouselContainer = () =>{
    const [index , setIndex]=useState(0)
    const [color , setColor]=useState(1)

    const handleSlide= (newIndex) =>{
        if (newIndex<0){
            newIndex=4
        }
        else if(newIndex>4){
            newIndex=0
        }
        setIndex(newIndex)
    }

    const handleColor = (button) =>{
        setColor(button)
    }

    return(
        <div className="carousel-container">
            <div className="carousel-inner">
                {items.map((item,i)=>{
                    return <CarouselItem key={i} image={item.image} header={item.header} position={index}/>
                })}
            </div>
            <div className={`left-control ${color===0?"clicked":""}`} onClick={()=>{handleSlide(index-1); handleColor(0)}}>
                <img src={leftarrow}/>
            </div>
            <div className={`right-control ${color===1?"clicked":""}`} onClick={()=>{handleSlide(index+1); handleColor(1)}}>
                <img src={arrow}/>
            </div>
        </div>
    )

}

const CarouselItem = ({image, header, position}) =>{
    return (
        <div className="carousel-item-outer" style={{transform:`translateX(-${position * 100}%)`}}>
        <div className="carousel-item">
            <div className="carousel-item-wrapper">
                <div className="carousel-item-image">
                    <img src={image} loading="lazy" alt="card image"/>
                </div>
                <div className="carousel-item-words">
                    <h3>{header}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Hic, explicabo nemo esse voluptas quam exercitationem 
                        necessitatibus quos voluptat.</p>
                </div>
                <div className="carousel-item-line"></div>
            </div>
        </div>
        </div>
    )
}

export default CarouselContainer