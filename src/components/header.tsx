import * as React from "react";
import Headroom from "react-headroom";
import Navigation from "./navigation";

export const Header = ({ data, toggleNav }) => {
    return (
        <Headroom>
            <header className="header" itemScope={true}>
                <div className="container">
                    <div className="header-text">
                        <h2 className="header-title" itemProp="title">
                            <a className="header-link" href="/">
                                {data.site.siteMetadata.title}
                            </a>
                        </h2>
                    </div>

                    <Navigation toggleNav={toggleNav} />
                </div>
            </header>
        </Headroom>
    );
};
