import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const ArticleListItem = ({ title, path, imagePath, imageAlt }) => (
  <div className="article-list-item">
    <Link to={path} style={{ textDecoration: `none` }}>
      <Img fluid={imagePath} alt={imageAlt} />
      <h3 style={{ color: `initial`, fontWeight: `400`, textAlign: `center` }}>
        {title}
      </h3>
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
