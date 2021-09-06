import * as React from "react";

interface ProfileProps {
    url: string;
    alt: string;
    caption?: string;
}

export const Profile = ({ alt, caption, url }: ProfileProps) => {
    return (
        <figure className="profile">
            <img className="profile-image" src={url} alt={alt} />
            {caption && (
                <figcaption className="profile-caption">{caption}</figcaption>
            )}
        </figure>
    );
};
