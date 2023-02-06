import React from "react";
import '../index.css'

const Heading=(props)=>{
    const{title,subtitle}=props
    return(
        <div className="heading">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            
        </div>
    )
}

export default Heading