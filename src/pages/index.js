import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tabs from "../components/tabs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Tabs />
  </Layout>
)

export default IndexPage
