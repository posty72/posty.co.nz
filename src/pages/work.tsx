/* eslint-disable max-lines */
import * as React from "react";
import { EXTERNAL_LINKS, PAGES } from "../config/links";
import { CallToAction } from "../components/call-to-action";
import { Feature } from "../components/feature";
import { Layout } from "../components/layout";
import { Tiles } from "../components/tiles";
import yonderScreenshot from "../images/yonder-screenshot.png";

const Work = () => {
    return (
        <Layout title="Work">
            <Feature
                title="YonderHQ"
                subtitle="Multi platform"
                content={
                    <>
                        <p>
                            Worked on multiple projects as a part-time developer
                            over two years. The products included were a
                            real-time chatbot, a mobile app, panel and widget to
                            be embedded on {"clients'"} websites.
                        </p>
                        <p>
                            The embeddable widget was created using Preact to
                            keep it light and portable, and to keep a familiar
                            developer experience to React. The{" "}
                            {"administrator's"} dashboard uses React, Redux and
                            RxJS and WebSockets.
                        </p>
                    </>
                }
                image={yonderScreenshot}
                imageDescription="A screenshot of the YonderHQ realtime chat interface"
            />
            <Feature
                title="YonderHQ"
                subtitle="Multi platform"
                align="right"
                content={
                    <>
                        <p>
                            Worked on multiple projects as a part-time developer
                            over two years. The products included were a
                            real-time chatbot, a mobile app, panel and widget to
                            be embedded on {"clients'"} websites.
                        </p>
                        <p>
                            The embeddable widget was created using Preact to
                            keep it light and portable, and to keep a familiar
                            developer experience to React. The{" "}
                            {"administrator's"} dashboard uses React, Redux and
                            RxJS and WebSockets.
                        </p>
                    </>
                }
                image={yonderScreenshot}
                imageDescription="A screenshot of the YonderHQ realtime chat interface"
            />
            <div className="constrain-width">
                <h2 className="heading-3">
                    Companies, products and brands {"I've"} worked with...
                </h2>
            </div>
            <Tiles
                items={[
                    {
                        title: "Tipu",
                        description: (
                            <p>
                                Tipu is a learning platform to help people learn
                                Te Reo Māori. While I {"wasn't"} directly
                                involved with coding the platform, I ran
                                workshops to identify high risk, high value
                                areas to improve the product.
                            </p>
                        ),
                        iconColour: "#93f2f4",
                        tags: ["mobile app", "api", "education"],
                    },
                    {
                        title: "Ngāti Rangi",
                        description: (
                            <p>
                                Ngāti Rangi the first in a set of
                                server-rendered React websites backed by a
                                unified headless CMS. This was full-stack for
                                me, from ideation, design, back-end, front-end
                                and infrastructure.
                            </p>
                        ),
                        iconColour: "#056c95",
                        tags: ["website", "dashboard", "iwi", "api"],
                    },
                    {
                        title: "mnyou",
                        description: (
                            <p>
                                Created the initial version of their mobile app
                                using React Native. Went through an initial Lean
                                MVP iteration to validate the viability of the
                                product.
                            </p>
                        ),
                        iconColour: "#ef8c2e",
                        tags: ["mobile app", "hospitality"],
                    },
                    {
                        title: "Metrix",
                        description: (
                            <p>
                                Created an internal dashboard to track power
                                events on metering equipment.
                            </p>
                        ),
                        iconColour: "#ef8c2e",
                        tags: ["dashboard", "energy"],
                    },
                    {
                        title: "The Mindlab",
                        description: <p></p>,
                        iconColour: "#02d48a",
                        tags: ["portal", "education"],
                    },
                    {
                        title: "Three",
                        description: (
                            <p>
                                Maintained a self-hosted video on demand
                                platform and helped move to a cloud provider. I
                                was heavily involved in advertising and making
                                sure the video player worked smoothly.
                            </p>
                        ),
                        iconColour: "#ff004f",
                        tags: ["video on demand", "media"],
                    },
                ]}
            />
        </Layout>
    );
};

export default Work;
