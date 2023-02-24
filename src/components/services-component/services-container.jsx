import React from "react";
import { Link } from "react-router-dom";

import "./services-container.css"
import mobilephone from "../../assets/services-images/mobilephone.png"
import Startup from "../../assets/services-images/Startup.png"
import Megaphone from "../../assets/services-images/Megaphone.png"
import marketing from "../../assets/services-images/Marketing Plan.png"
import funnel from "../../assets/services-images/funnel.png"
import board from "../../assets/services-images/board.png"
import settings from "../../assets/services-images/settings.png"
import blue from '../../assets/services-images/vector (1).png'
import ServicesGrid from "../../components/services-component/services-grid"

const ServicesContainer = ()=>{
    return (
        <div className="home-services">
            <div className="wrapper">
                <div className="services-heading">
                    <div className="services-title">
                        <div className="info-div">
                            <img src={settings} loading='lazy'/>
                            <div className="title">
                                <p className="title-sub"> <span>/ / </span> 01 . SERVICES</p>
                                <h2 className="title-text">High-impact digital services to take your business to the next level</h2>
                            </div>
                        </div>
                        <Link to="#" className="services-button"> 
                            <div>Our Services</div>
                            <img src={blue}/>
                        </Link>           
                    </div>
                </div>
                
                <div className="services-content">
                    <ServicesGrid image={mobilephone} sub='Social Media Marketing' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={Megaphone} sub='Paid Advertising' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={board} sub='Advanced Analytics' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={Startup} sub='SEO Optimization' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={funnel} sub='Funnel Optimization' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={marketing} sub='Content Marketing' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                </div>
            </div>
        </div>
    )

}

export default ServicesContainer