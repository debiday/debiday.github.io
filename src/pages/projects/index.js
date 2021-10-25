import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, project } from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'

export default function Projects({ data }) {

    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return ( 
        <Layout>
            <div className={portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects and Websites I've Created</h3>
                <div className={project}>
                    {projects.map(project => (
                        <Link to={'/projects' + project.frontmatter.slug} key={project.id}>
                            <div>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at <b>{contact}</b> 👋</p>
            </div>
        </Layout>
    )
}

//export page query
export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___order}) {
        nodes {
            frontmatter {
            slug
            stack
            title
            }
            id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
}
`