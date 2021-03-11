/* eslint-disable react/jsx-max-depth */
import * as React from "react";
import Headroom from "react-headroom";
import Navigation from "./navigation";

interface HeaderProps {
    title: string;
    toggleNav: () => void;
}

const Header = ({ title, toggleNav }: HeaderProps) => {
    return (
        <Headroom>
            <header className="header" itemScope={true}>
                <div className="container">
                    <div className="header-text">
                        <h2 className="header-title" itemProp="title">
                            <a className="header-link" href="/">
                                {title}
                            </a>
                        </h2>
                    </div>

                    <Navigation toggleNav={toggleNav} />
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
