import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { details, html } from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
    console.log(data)
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    
    return (
        <Layout>
            <div className={details}> 
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={details}> 
                    <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Banner" />
                </div> 
                <div className={html} dangerouslySetInnerHTML={{__html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
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