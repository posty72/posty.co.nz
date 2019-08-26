import { Location } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'
import Feature from '../components/feature'
import Layout from '../components/layout'

interface IndexPageProps {
    location: Location
}

const IndexPage = ({ location }: IndexPageProps) => (
    <StaticQuery
        query={graphql`
                query IndexQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                    about: allMarkdownRemark(filter: {frontmatter:{title: {eq: "About Me"}}}) {
                        edges {
                            node {
                                id
                                fields {
                                    slug
                                }
                                excerpt(pruneLength: 150)
                                frontmatter {
                                    title
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
                    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
                        edges {
                            node {
                                id
                                fields {
                                    slug
                                }
                                excerpt(pruneLength: 300)
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
            <Layout location={location as any}>
                <div>
                    <section>
                        {
                            data.about.edges.map(({ node }) => <Feature key={node.id} data={node} />)
                        }
                    </section>
                    <section>
                        <h1>
                            <Link to="/writing">Writing</Link>
                        </h1>
                        <hr />
                        {
                            data.posts.edges
                                .filter(({ node: { frontmatter: { title } } }) => title.toLowerCase() !== 'about me')
                                .map(({ node }) => <Feature key={node.id} data={node} />)
                        }
                    </section>
                </div>
            </Layout>
        } />
)

export default IndexPage
