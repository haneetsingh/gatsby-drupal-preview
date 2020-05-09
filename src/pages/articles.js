import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ArticleListItem from "../components/articleListItem"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>

      <div className="article-list">
        {articles.map(article => (
          <ArticleListItem
            key={article.id}
            title={article.title}
            path={article.path.alias}
            imagePath={
              article.relationships.field_media_image.relationships
                .field_media_image.localFile.childImageSharp.fluid
            }
            imageAlt={
              article.relationships.field_media_image.field_media_image.alt
            }
          />
        ))}
      </div>
    </Layout>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Articles

export const data = graphql`
  {
    allNodeArticle(sort: { fields: created, order: DESC }) {
      nodes {
        id
        title
        path {
          alias
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
                    fluid(maxWidth: 300, maxHeight: 260) {
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
  }
`
