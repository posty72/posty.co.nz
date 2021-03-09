import * as React from "react";

interface PreviewProps {
    title: string;
    description: string;
}

export const Preview = ({ title, description }: PreviewProps) => (
    <article
        className="teaser"
        itemScope={true}
        itemType="http://schema.org/BlogPosting"
    >
        <h2 className="teaser-title">{title}</h2>
        <p className="teaser-description">{description}</p>
    </article>
);
