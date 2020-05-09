import { graphql } from "gatsby"
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
      <img
        alt={post.relationships.field_media_image.field_media_image.alt}
        src={
          post.relationships.field_media_image.relationships.field_media_image
            .localFile.publicURL
        }
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
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
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
