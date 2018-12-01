import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Loh Jia Jing Personal Portflio' },
            { name: 'keywords', content: 'I am Loh Jia Jing. A software engineer, doing frontend web development. Sometimes, I also design user interface and experience for Mobile Application and Website.' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="container">
          {children}
        </div>
        <footer>
          Why not we have a coffee, and see how can we work together. 
          <br/>
          You can call me out via my email - jiajing19932@gmail.com. 
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
