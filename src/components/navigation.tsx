/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import Link from "gatsby-link";
import * as React from "react";

const NavItem = ({ to, label }: { to: string; label: string }) => (
    <li className="nav-item">
        <Link className="nav-item-link" role="menuitem" to={to}>
            {label}
        </Link>
    </li>
);

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
                <NavItem to="/work" label="Work" />
                <NavItem to="/style-guide" label="Style Guide" />
            </ul>
            <Link to="/contact" className="button tertiary">
                Contact Me
            </Link>
        </nav>
    </div>
);

export default Navigation;
