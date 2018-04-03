import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const Categories = ({ pathContext }) => {
    const { posts, post, tag } = pathContext;

    if (tag) {
        return (
            <div>
                <h1>
                    {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
                </h1>
                {post.map(({ id, frontmatter, fields }) => {
                    return (
                        <li key={id}>
                            <Link to={fields.slug}>{frontmatter.title}</Link>
                        </li>
                    );
                })}
                <Link to="/categories">All categories</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Categories</h1>
            <ul className="tags">
                {
                    Object.keys(posts).map((tagName) => {
                        return (
                            <li key={tagName}>
                                <Link to={`/categories/${tagName}`}>{tagName}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

Categories.propTypes = {
    pathContext: PropTypes.object,
};

export default Categories;
