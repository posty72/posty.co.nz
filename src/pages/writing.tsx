import { graphql, StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'
import Feature from '../components/feature'
import Layout from '../components/layout'

const IndexPage = ({ location }) => (
    <StaticQuery
        query={graphql`
                query BlogQuery {
                    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                        totalCount
                        edges {
                            node {
                                id
                                fields {
                                    slug
                                }
                                excerpt
                                frontmatter {
                                    title
                                    date
                                    image {
                                        thumbnail: childImageSharp {
                                            resolutions(width: 300, height: 200) {
                                                src
                                                srcSet
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `
        }
        render={(data) =>
            <Layout location={location}>
                <section>
                    <h1>Writing</h1>
                    <hr />
                    {data.posts.edges
                        .filter(({ node: { frontmatter: { title } } }) => title.toLowerCase() !== 'about me')
                        .map(({ node }) => <Feature key={node.id} data={node} />)}

                    <h4><Link to="/tags">View by tag</Link></h4>
                </section>
            </Layout>
        } />
)

export default IndexPage