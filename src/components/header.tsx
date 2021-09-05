/* eslint-disable react/jsx-max-depth */
import * as React from "react";
import Navigation from "./navigation";

interface HeaderProps {
    title: string;
    toggleNav: () => void;
}

export const Header = ({ title, toggleNav }: HeaderProps) => {
    return (
        <header className="header" itemScope={true}>
            <div className="header-inner || constrain-width">
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
    );
};
