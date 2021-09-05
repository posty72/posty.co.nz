import * as React from "react";
import type { ClassNamesType } from "../utlity/class-names";
import { classNames } from "../utlity/class-names";

interface FooterLinkProps {
    link: string;
    label: string;
    className: ClassNamesType;
}
const FooterLink = ({ link, label, className }: FooterLinkProps) => (
    <li className={classNames("footer-item", className)}>
        <a
            className="footer-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {label}
        </a>
    </li>
);

export const Footer = () => (
    <footer className="footer">
        <ul className="footer-items">
            <FooterLink
                className="twitter"
                link="https://twitter.com/posty72"
                label="Twitter"
            />
            <FooterLink
                className="github"
                link="https://github.com/posty72"
                label="Github"
            />
        </ul>
    </footer>
);
