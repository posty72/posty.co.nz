import * as React from "react";

interface FeatureProps {
    title: string;
    subtitle: string;
    content: React.ReactNode;
    image: string;
    imageDescription: string;
}

export const Feature = ({
    title,
    subtitle,
    content,
    image,
    imageDescription,
}: FeatureProps) => (
    <div className="constrain-width large">
        <article className="feature">
            <div className="feature-info">
                <h2 className="feature-subtitle">{subtitle}</h2>
                <h2 className="feature-title">{title}</h2>
                <div className="feature-content">{content}</div>
            </div>
            <div className="feature-image">
                <img src={image} alt={imageDescription} />
            </div>
        </article>
    </div>
);
