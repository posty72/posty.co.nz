import PropTypes from 'prop-types';
import React from 'react';

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <div className="post">
            <h1 className="page-title">{post.frontmatter.title}</h1>
            <hr />
            <img
                className="post-image"
                srcSet={post.frontmatter.image.childImageSharp.responsiveSizes.srcSet}
                src={post.frontmatter.image.childImageSharp.responsiveSizes.src}
                sizes={post.frontmatter.image.childImageSharp.responsiveSizes.sizes} />
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-author">{post.frontmatter.author}</div>
        </div>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object,
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                image {
                    childImageSharp {
                        responsiveSizes(maxWidth: 800) {
                            src
                            srcSet
                            sizes
                        }
                    }
                }
            }
        }
    }
`;

export default BlogPost;
