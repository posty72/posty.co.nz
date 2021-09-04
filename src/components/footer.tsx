import * as React from "react";
import { classNames } from "../utlity/class-names";

const FooterLink = ({ link, label, className }) => (
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
            <FooterLink
                className="email"
                link="mailto:hi@posty.co.nz"
                label="Contact"
            />
        </ul>
    </footer>
);
