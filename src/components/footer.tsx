import * as React from "react";

const Footer = () => (
    <footer className="footer">
        <ul className="footer-links">
            <li className="twitter footer-link">
                <a
                    href="http://twitter.com/posty72"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
            </li>
            <li className="github footer-link">
                <a
                    href="http://github.com/posty72"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </li>
            <li className="email footer-link">
                <a href="mailto: posty72@gmail.com">Contact</a>
            </li>
        </ul>
    </footer>
);

export default Footer;
