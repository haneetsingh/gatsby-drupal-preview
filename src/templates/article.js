import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <Img
        fluid={
          post.relationships.field_media_image.relationships.field_media_image
            .localFile.childImageSharp.fluid
        }
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.body.processed }}
        style={{ marginTop: `1.25rem` }}
      />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article

export const query = graphql`
  query ArticleQuery($articleId: String!) {
    nodeArticle(id: { eq: $articleId }) {
      id
      title
      path {
        alias
      }
      body {
        processed
      }
      relationships {
        field_media_image {
          field_media_image {
            alt
          }
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
