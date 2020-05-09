import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const ArticleListItem = ({ title, path, imagePath, imageAlt }) => (
  <div
    style={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      margin: `0 1.25rem 1rem`,
      width: `calc(33% - 2.5rem)`,
    }}
  >
    <Link to={path} style={{ textDecoration: `none` }}>
      <Img fixed={imagePath} alt={imageAlt} />
      <h4 style={{ color: `initial`, fontWeight: `400`, textAlign: `center` }}>
        {title}
      </h4>
    </Link>
  </div>
)

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}

export default ArticleListItem
