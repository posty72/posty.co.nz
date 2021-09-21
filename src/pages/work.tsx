import * as React from "react";
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
                        tags: ["website", "dashboard", "iwi"],
                    },
                    {
                        title: "mnyou",
                        description: <p></p>,
                        iconColour: "#ef8c2e",
                        tags: ["mobile app", "hospitality"],
                    },
                ]}
            />
            <CallToAction
                title="Get in touch with me"
                links={[
                    { label: "Direct Message", link: "/contact" },
                    {
                        label: "LinkedIn",
                        link: "https://www.linkedin.com/in/joshpost/",
                    },
                ]}
            />
        </Layout>
    );
};

export default Work;
