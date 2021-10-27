import React from 'react'
import Layout from '../components/Layout'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { details, html } from '../styles/project-details.module.css'

export default function ProjectDetails() {
    return (
        <Layout>
            <div className={details}> 
                <h2>title</h2>
                <h3>stack</h3>
                <div className={details}> 
                    {/* <GatsbyImage /> */}
                </div> 
                {/* <div className={html} dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    )
}
