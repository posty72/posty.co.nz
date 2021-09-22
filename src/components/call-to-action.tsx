import { Link } from "gatsby";
import * as React from "react";
import type { LinkInConfig } from "../config/links";
import { classNames } from "../utility/class-names";

interface CallToActionProps {
    title: string;
    links: LinkItem[];
}

interface LinkItem {
    label: string;
    link: LinkInConfig;
}

export const CallToAction = ({ title, links = [] }: CallToActionProps) => {
    return (
        <div className="call-to-action">
            <div className="call-to-action-inner">
                <h2 className="call-to-action-title">{title}</h2>
                <div className="call-to-action-actions">
                    {links.map(({ label, link }, index) => {
                        const buttonClass = classNames(
                            "call-to-action-button button",
                            index === 0 ? "tertiary" : ""
                        );

                        if (link.startsWith("http")) {
                            return (
                                <a
                                    key={link}
                                    className={buttonClass}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {label}
                                </a>
                            );
                        }

                        return (
                            <Link key={link} className={buttonClass} to={link}>
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
