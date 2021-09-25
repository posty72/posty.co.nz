/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import Link from "gatsby-link";
import * as React from "react";
import { PAGES, EXTERNAL_LINKS } from "../config/links";

interface NavItemProps {
    to: string;
    label: string;
    external?: true;
}

const NavItem = ({ to, label, external }: NavItemProps) => {
    return (
        <li className="nav-item">
            {(external && (
                <a
                    className="nav-item-link"
                    role="menuitem"
                    href={to}
                    target="_blank"
                    rel="noreferrer"
                >
                    {label}
                </a>
            )) || (
                <Link className="nav-item-link" role="menuitem" to={to}>
                    {label}
                </Link>
            )}
        </li>
    );
};

interface NavigationProps {
    toggleNav: () => void;
}

const Navigation = ({ toggleNav }: NavigationProps) => (
    <div className="navigation">
        <button className="hamburger" onClick={toggleNav}>
            <div className="hamburger-wrapper">
                <div className="hamburger-item line-1" />
                <div className="hamburger-item line-2" />
            </div>
            Show menu
        </button>

        <nav className="nav" role="menu">
            <ul className="nav-items">
                <NavItem to={PAGES.work} label="Work" />
                <NavItem to={PAGES.styleGuide} label="Style Guide" />
                <NavItem
                    to={EXTERNAL_LINKS.linkedIn}
                    label="LinkedIn"
                    external
                />
                <NavItem to={EXTERNAL_LINKS.github} label="GitHub" external />
            </ul>
            <Link to={PAGES.contact} className="button tertiary">
                Contact Me
            </Link>
        </nav>
    </div>
);

export default Navigation;
