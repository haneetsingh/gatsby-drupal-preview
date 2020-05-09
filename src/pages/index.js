import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Gatsby Drupal Preview</h1>
    <p>
      This is a sample website to showcase the preview of Gatsby with content
      sourced from Drupal CMS.
    </p>
  </Layout>
)

export default IndexPage
