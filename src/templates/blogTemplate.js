import React from "react"
import { graphql, Link } from "gatsby"
import './blog.scss'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Link className="back-button" to="/">Home</Link>
      <div className="blog-post-header">
        
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </div>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`