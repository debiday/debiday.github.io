import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout style={{height: "100vh"}}>
      <section className={header}> 
        <div>
          <h2 style={{fontSize: "9vh"}}>Hello</h2>
          <h3 style={{fontSize: "7vh"}}>I'm Deborah&nbsp;👋</h3>
          <p style={{fontSize: "4vh"}}>Software Builder in the Bay Area</p>
          <Link className={btn} to='/projects' style={{fontSize: "3vh"}}>My Projects</Link>
        </div>
        <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Banner" />
      </section>
  </Layout> 
  )
}

export const query = graphql `
query Banner {
  file(relativePath: {eq: "head.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: PNG)
    }
  }
}
`