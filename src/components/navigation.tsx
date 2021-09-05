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
        <div className="hamburger" onClick={toggleNav}>
            <div className="hamburger-wrapper">
                <div className="hamburger-item line-1" />
                <div className="hamburger-item line-2" />
            </div>
        </div>

        <nav className="nav">
            <ul className="nav-items" role="menu">
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
