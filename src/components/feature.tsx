import Link from 'gatsby-link'
import * as React from 'react'

const Feature = ({ data }) => (
    <article className="feature">
        <Link className="feature-image-anchor" aria-label={data.frontmatter.title} to={data.fields.slug}>
            <img
                className="feature-image"
                alt={data.frontmatter.title}
                srcSet={data.frontmatter.image.thumbnail.resolutions.srcSet}
                src={data.frontmatter.image.thumbnail.resolutions.src}
            />
        </Link>
        <div className="feature-info">
            <h2 className="feature-title">
                <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
            </h2>
            <p className="feature-content">{data.excerpt}</p>
        </div>
    </article>
)

export default Feature
