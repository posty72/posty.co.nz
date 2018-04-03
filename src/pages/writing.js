import Feature from '../components/feature';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const IndexPage = ({ data }) => {
    return (
        <section>
            <h1>Writing</h1>
            <hr />
            {data.posts.edges
                .filter(({ node: { frontmatter: { title } } }) => title.toLowerCase() !== 'about me')
                .map(({ node }) => <Feature key={node.id} data={node} />)}

            <h4><Link to="/categories">View by categories</Link></h4>
        </section>
    );
};

IndexPage.propTypes = {
    data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
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
`;
