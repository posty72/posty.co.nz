import Feature from '../components/feature';
import Link from 'gatsby-link';
import Preview from '../components/preview';
import PropTypes from 'prop-types';
import React from 'react';

const IndexPage = ({ data }) => {
    return (
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
    );
};

IndexPage.propTypes = {
    data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
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
                    excerpt(pruneLength: 400)
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
`;

// image {
//     thumbnail: childImageSharp {
//         resolutions(width: 300, height: 200) {
//             base64
//             tracedSVG
//             aspectRatio
//             width
//             height
//             src
//             srcSet
//             srcWebp
//             srcSetWebp
//             originalName
//         }
//     }
// }
