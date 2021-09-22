import * as React from "react";
import { useLocation } from "@reach/router";
import { EXTERNAL_LINKS, PAGES } from "../config/links";
import { CallToAction } from "./call-to-action";

export const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer className="footer">
            {!pathname.startsWith(PAGES.contact) && (
                <CallToAction
                    title="Get in touch with me"
                    links={[
                        { label: "Direct Message", link: PAGES.contact },
                        {
                            label: "LinkedIn",
                            link: EXTERNAL_LINKS.linkedIn,
                        },
                    ]}
                />
            )}
        </footer>
    );
};
