import Headroom from 'react-headroom';
import Link from 'gatsby-link';
import Navigation from './navigation';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ data, toggleNav }) => {
    return (
        <Headroom>
            <header className="header" itemScope>
                <div className="container">
                    <div className="header-text">
                        <h2 className="header-title" itemProp="title">
                            <Link className="header-link" to="/">{data.site.siteMetadata.title}</Link>
                        </h2>
                    </div>

                    <Navigation toggleNav={toggleNav} />
                </div>
            </header>
        </Headroom>
    );
};

Header.propTypes = {
    data: PropTypes.object.isRequired,
    toggleNav: PropTypes.func.isRequired
};

export default Header;
