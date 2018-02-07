import Link from 'gatsby-link';
import React from 'react';

const Preview = ({ data }) => (
    <article className="teaser" itemScope itemType="http://schema.org/BlogPosting">
        <Link className="teaser-anchorImage" to={data.fields.slug} title={data.frontmatter.title}>
            <img
                className="feature-image"
                srcSet={data.frontmatter.image.thumbnail.resolutions.srcSet}
                src={data.frontmatter.image.thumbnail.resolutions.src}
            // sizes={data.frontmatter.image.thumbnail.responsiveSizes.sizes}
            />

            <h1 className="teaser-title">
                <Link className="teaser-title-link" to={data.fields.slug} title={data.frontmatter.title}>{data.frontmatter.title}</Link>
            </h1>
        </Link>
    </article>
);

export default Preview;
