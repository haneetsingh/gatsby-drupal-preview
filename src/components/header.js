import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-around`,
      }}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </div>
      <ul style={{ display: `flex`, listStyle: `none`, margin: `0 0 0 auto` }}>
        <li>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `1.25rem`,
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `1.25rem`,
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `1.25rem`,
            }}
          >
            Articles
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
