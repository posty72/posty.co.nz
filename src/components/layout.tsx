import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import Header from "../components/header";
import "../layouts/index.scss";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const [navOpen, setNavOpen] = React.useState(false);
    const navClass = navOpen ? "nav-open" : "";

    React.useEffect(() => {
        setNavOpen(false);
    }, [location.pathname]);

    return (
        <StaticQuery
            query={graphql`
                query HeaderQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={(data) => (
                <div className={`base ${navClass}`}>
                    <Helmet
                        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
                        meta={[
                            { name: "theme-color", content: "#2fbc42" },
                            {
                                name: "description",
                                content: "Josh Post - Software developer",
                            },
                            {
                                name: "keywords",
                                content:
                                    "I create awesome digital products. I've been working professionally as a developer since 2013.",
                            },
                            {
                                name: "google-site-verification",
                                content:
                                    "7RxMn2JUwrO_NOuUXeoWSl90NElOenZ4Ky5WnFxd_q4",
                            },
                        ]}
                    />
                    <html lang="en" />
                    <Header
                        title={data.site.siteMetadata.title}
                        toggleNav={() => setNavOpen(!navOpen)}
                    />
                    <main className="main || container">{children}</main>
                    <Footer />
                </div>
            )}
        />
    );
};
