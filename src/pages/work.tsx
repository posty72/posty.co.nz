import * as React from "react";
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis repellendus, asperiores facilis laborum
                        corporis ullam, ut rem praesentium veritatis illo
                        consectetur. Quaerat totam repellendus, voluptatum sequi
                        dolore laboriosam iste accusantium?
                    </p>
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt incidunt ducimus
                                asperiores odit eaque veritatis, nesciunt omnis
                                temporibus maxime architecto optio quaerat unde
                                rerum cupiditate est earum harum officia
                                molestiae?
                            </p>
                        ),
                        iconColour: "#93f2f4",
                        tags: ["mobile app", "api", "education"],
                    },
                    {
                        title: "Ngāti Rangi",
                        description: (
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt incidunt ducimus
                                asperiores odit eaque veritatis, nesciunt omnis
                                temporibus maxime architecto optio quaerat unde
                                rerum cupiditate est earum harum officia
                                molestiae?
                            </p>
                        ),
                        iconColour: "#056c95",
                        tags: ["website", "dashboard", "iwi"],
                    },
                    {
                        title: "mnyou",
                        description: (
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt incidunt ducimus
                                asperiores odit eaque veritatis, nesciunt omnis
                                temporibus maxime architecto optio quaerat unde
                                rerum cupiditate est earum harum officia
                                molestiae?
                            </p>
                        ),
                        iconColour: "#ef8c2e",
                        tags: ["mobile app", "hospitality"],
                    },
                ]}
            />
        </Layout>
    );
};

export default Work;
