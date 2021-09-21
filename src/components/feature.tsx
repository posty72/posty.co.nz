import * as React from "react";
import { classNames } from "../utlity/class-names";

interface FeatureProps {
    title: string;
    subtitle: string;
    content: React.ReactNode;
    /** Which side to have the text on on wide screens */
    align?: "left" | "right";
    image: string;
    imageDescription: string;
}

export const Feature = ({
    title,
    subtitle,
    content,
    align = "left",
    image,
    imageDescription,
}: FeatureProps) => (
    <div className="constrain-width large">
        <article className={classNames("feature", align)}>
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
