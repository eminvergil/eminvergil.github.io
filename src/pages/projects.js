import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            name
            about
            when
            url
          }
        }
      }
    }
  `)
  const projects = data.site.siteMetadata.projects.map((item, index) => (
    <li key={index}>{item.name}</li>
  ))
  return (
    <Layout pageTitle="Projects" pageDescription="Learn more about my projects">
      <ul>{projects}</ul>
    </Layout>
  )
}
