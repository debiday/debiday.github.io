import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}> 
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>Software Builder based in the Bay Area.</p>
          <Link className={btn} to='/projects'>My Projects</Link>
        </div>
        <img src="/head.png" alt="site-banner" style={{ maxWidth: '100%' }}/>
      </section>
  </Layout> 
  )
}

