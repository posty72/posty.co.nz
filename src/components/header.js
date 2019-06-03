import Headroom from 'react-headroom';
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
                            <a className="header-link" href="/">{data.site.siteMetadata.title}</a>
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
