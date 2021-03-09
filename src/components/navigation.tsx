import Link from "gatsby-link";
import * as React from "react";

const Navigation = ({ toggleNav }) => (
    <div className="navigation">
        <div className="hamburger" onClick={toggleNav}>
            <div className="hamburger-wrapper">
                <div className="hamburger-item line-1" />
                <div className="hamburger-item line-2" />
                <div className="hamburger-item line-3" />
            </div>
        </div>

        <nav className="nav">
            <ul className="nav-items" role="menu">
                <li className="nav-item">
                    <Link className="nav-item-link" role="menuitem" to="/work">
                        /work
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-item-link"
                        role="menuitem"
                        to="/contact"
                    >
                        /contact
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navigation;
