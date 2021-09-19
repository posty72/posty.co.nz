import Link from "gatsby-link";
import * as React from "react";

interface FeatureProps {
    title: string;
    slug: string;
    excerpt: string;
}

export const Feature = ({ title, slug, excerpt }: FeatureProps) => (
    <article className="feature">
        <div className="feature-info">
            <h2 className="feature-title">
                <Link to={slug}>{title}</Link>
            </h2>
            <p className="feature-content">{excerpt}</p>
        </div>
    </article>
);
