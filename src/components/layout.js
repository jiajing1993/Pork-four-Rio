import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

const hotjar = (h,o,t,j,a,r) => {
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1111685,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    console.log(r)
    a.appendChild(r);
}

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
            { name: 'google-site-verification', content: 'WZmCTUIyeCflXu68foN0UAr9WfQEi2CHp6F8VST7F-k' },
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
        {
          hotjar(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
        }
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
