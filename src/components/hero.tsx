import * as React from "react";
import { classNames } from "../utlity/class-names";
import { Profile } from "./profile";

interface HeroProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
}

export const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
    return (
        <div className={classNames("hero", { "has-image": !!imageUrl })}>
            <div className="hero-inner || constrain-width">
                {(imageUrl && (
                    <>
                        <div className="hero-text">
                            <h1 className="hero-title">{title}</h1>
                            {subtitle && (
                                <h2 className="hero-subtitle">{subtitle}</h2>
                            )}
                        </div>
                        <div className="hero-image">
                            <Profile url={imageUrl} alt={title} />
                        </div>
                    </>
                )) || (
                    <>
                        <h1 className="hero-title">{title}</h1>
                        {subtitle && (
                            <h2 className="hero-subtitle">{subtitle}</h2>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
