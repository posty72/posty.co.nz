import Link from 'gatsby-link'
import * as React from 'react'
import { Image } from 'react-visible-image'

const Feature = ({ data }) => (
    <article className="feature">
        <Link className="feature-image-anchor" to={data.fields.slug}>
            <Image
                className="feature-image"
                // srcSet={data.frontmatter.image.thumbnail.resolutions.srcSet}
                image={data.frontmatter.image.thumbnail.resolutions.src}
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
