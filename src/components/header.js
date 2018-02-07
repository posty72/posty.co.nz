import Link from 'gatsby-link';
import Navigation from './navigation';
import React from 'react';

const Header = ({ data, toggleNav }) => {
    return (
        <header className="header" itemScope>
            <div className="header-text">
                <h2 className="header-title" itemProp="title">
                    <Link className="header-link" to="/">{data.site.siteMetadata.title}</Link>
                </h2>
            </div>

            <Navigation toggleNav={toggleNav} />

        </header>
    );
};

export default Header;
