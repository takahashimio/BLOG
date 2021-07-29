import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO
          pagetitle="HYGGEYについて"
          pagedesc="毎日を心地よく過ごすための情報を発信しているサイトです。"
          pagepath={location.pathname} />
        
        <div>
          <article className="content">
            <div className="container">
              <h1>HYGGEYについて</h1>
              <div>
                <p>居心地の良い暮らしをつくる情報を発信しているサイトです。</p>
              </div>
            </div>
          </article>
        </div>

      </Layout>
    </div>
  );
};

export default Aboutpage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`;