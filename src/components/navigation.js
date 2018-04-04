import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = ({ toggleNav }) => (
    <div className="navigation">
        <div className="hamburger" onClick={toggleNav}>
            <div className="hamburger-wrapper">
                <div className="hamburger-item line-1"></div>
                <div className="hamburger-item line-2"></div>
                <div className="hamburger-item line-3"></div>
            </div>
        </div>

        <nav className="nav">
            <ul className="nav-items" role="menu">
                <li className="nav-item">
                    <Link className="nav-item-link" to="/">/</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item-link" to="/about">/about</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-item-link" to="/categories">/categories</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-item-link" to="/writing">/writing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item-link" to="/contact">/contact</Link>
                    {/* <a className="nav-item-link" href="mailto: posty72@gmail.com" target="_blank" rel="noopener noreferrer">/contact</a> */}
                </li>
            </ul>
        </nav>
    </div >
);

Navigation.propTypes = {
    toggleNav: PropTypes.func
};

export default Navigation;
