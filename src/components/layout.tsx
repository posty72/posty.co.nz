import { graphql, StaticQuery } from "gatsby";
import type { ImageFile } from "pages";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import "../layouts/index.scss";
import { Footer } from "./footer";

interface LayoutProps {
    title: string;
    subtitle?: string;
    image?: ImageFile;
    children: React.ReactNode;
}

export const Layout = ({ title, subtitle, children, image }: LayoutProps) => {
    const [navOpen, setNavOpen] = React.useState(false);
    const navClass = navOpen ? "nav-open" : "";

    React.useEffect(() => {
        if ("navigator" in window) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    registration.unregister();
                }
            });
        }
    }, []);

    React.useLayoutEffect(() => {
        setNavOpen(false);
    }, [globalThis.location?.pathname]);

    return (
        <StaticQuery<{ site: { siteMetadata: { title: string } } }>
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
                        title={title}
                        htmlAttributes={{ lang: "en-NZ" }}
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
                    <Header
                        title={data.site.siteMetadata.title}
                        toggleNav={() => setNavOpen(!navOpen)}
                    />
                    <Hero title={title} subtitle={subtitle} image={image} />
                    <main className="main">{children}</main>
                    <Footer />
                </div>
            )}
        />
    );
};
