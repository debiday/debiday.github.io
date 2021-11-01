import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { details, btn, btn2 } from '../styles/project-details.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectDetails({ data }) {
    console.log(data)
    const { html } = data.markdownRemark
    const { title, stack, featuredImg, link, github } = data.markdownRemark.frontmatter
    
    return (
        <Layout>
            <div className={details}>
                <h2 style={{fontSize: "9vh"}}>{title}</h2>
                <h3 style={{fontSize: "7vh"}}>{stack}</h3>
                <div className={details}> 
                    <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Banner" />
                </div>  
                <div className={html} dangerouslySetInnerHTML={{__html: html }} />
                <button className={btn}><a href={link} style={{fontSize: "3vh"}}>Visit</a></button>
                <button className={btn2}><a href={github} style={{fontSize: "3vh"}}>Github</a></button>
                <br />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            github
            link
            stack
            title
            featuredImg {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: PNG)
            }
            }
        }
        }
    }
`
//check gatsby query