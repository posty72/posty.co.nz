import type { ImageFile } from "pages";
import * as React from "react";

interface ProfileProps {
    image: ImageFile;
    alt: string;
    caption?: string;
}

export const Profile = ({ alt, caption, image }: ProfileProps) => {
    return (
        <figure className="profile">
            <img
                className="profile-image"
                src={image.childImageSharp.fluid.srcWebp}
                srcSet={image.childImageSharp.fluid.srcSetWebp}
                alt={alt}
            />
            {caption && (
                <figcaption className="profile-caption">{caption}</figcaption>
            )}
        </figure>
    );
};
