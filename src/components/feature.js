import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const Feature = ({ data }) => {
    console.log(data);

    return (
        <article className="feature">
            <Link className="feature-image-anchor" to={data.fields.slug}>
                <img
                    className="feature-image"
                    srcSet={data.frontmatter.image.thumbnail.resolutions.srcSet}
                    src={data.frontmatter.image.thumbnail.resolutions.src}
                // sizes={data.frontmatter.image.thumbnail.responsiveSizes.sizes}
                />
            </Link>
            <div className="feature-info">
                <h2 className="feature-title">
                    <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
                </h2>
                <div className="feature-content">
                    {data.excerpt}
                </div>
            </div>
        </article>
    );
};

Feature.propTypes = {
    data: PropTypes.object
};

export default Feature;
