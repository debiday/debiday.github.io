import React from 'react'
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin, FaWordpress } from "react-icons/fa";

export default function footer() {
    return (
        <div>
            <footer>
                <a href="https://github.com/Debiday" style={{padding: "0.2em"}}>
                    <GoMarkGithub />      
                </a> 
                <a href="https://www.linkedin.com/in/debiday/" style={{padding: "0.2em"}}>
                    <FaLinkedin />      
                </a>  
                <a href="https://debiday.wordpress.com/" style={{padding: "0.2em"}}>
                    <FaWordpress />      
                </a>
            </footer>
        </div>
    )
}
