import { Link } from "gatsby";
import * as React from "react";
import { classNames } from "../utlity/class-names";

interface CallToActionProps {
    title: string;
    links: LinkItem[];
}

interface LinkItem {
    label: string;
    link: string;
}

export const CallToAction = ({ title, links = [] }: CallToActionProps) => {
    return (
        <div className="constrain-width small">
            <div className="call-to-action">
                <h2 className="call-to-action-title">{title}</h2>
                {links.map(({ label, link }, index) => {
                    if (link.startsWith("http")) {
                        return (
                            <a
                                key={link}
                                className={classNames(
                                    "call-to-action-button button",
                                    index === 0 ? "primary" : ""
                                )}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {label}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={link}
                            className={classNames(
                                "call-to-action-button button",
                                index === 0 ? "primary" : ""
                            )}
                            to={link}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
