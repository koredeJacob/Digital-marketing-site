import React from "react"

import instagram from "../../assets/aboutimages/instagram.png"
import facebook from "../../assets/aboutimages/facebook.png"
import twitter from "../../assets/aboutimages/twitter.png"
import "./teamcard.css"

const TeamCard=({name,role,picture})=>{
    return(
        <div className="team-card">
            <div className="team-card-image">
                <img src={picture} loading="lazy"/>
            </div>
            <div className="blue-line"></div>
            <div className="team-member-info">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
            <div className="team-socials">
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={instagram}/>
            </div>
        </div>
    )
}

export default TeamCard