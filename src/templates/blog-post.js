import * as moment from 'moment';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import TagList from '../components/tag-list';

const BlogPost = ({ data: { markdownRemark: post }, location }) => (
    <Layout location={location}>
        <div className="post">
            <h1 className="page-title">{post.frontmatter.title}</h1>
            <hr />
            <img
                className="post-image"
                srcSet={post.frontmatter.image.childImageSharp.fluid.srcSet}
                src={post.frontmatter.image.childImageSharp.fluid.src}
                sizes={post.frontmatter.image.childImageSharp.fluid.sizes} />
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-author">{post.frontmatter.author} • {moment(post.frontmatter.date).format('MMMM DD YYYY')}</div>
            {post.frontmatter.categories.length > 0 && <TagList tags={post.frontmatter.categories} />}
        </div>
    </Layout>
);

BlogPost.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                categories
                date
                image {
                    childImageSharp {
                        fluid(maxWidth: 800) {
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
