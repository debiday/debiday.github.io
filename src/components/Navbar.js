import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
        siteMetadata {
            title
        }
    }
}
`)

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h2 style={{fontSize: "3vh"}}>{ title }</h2>
            <div className="links" style={{fontSize: "3vh"}}>
                <Link to='/' >Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}
