import * as React from "react";
import { Content } from "../components/content";
import { CallToAction } from "../components/call-to-action";
import { Highlight } from "../components/highlight";
import { Layout } from "../components/layout";
import { Tiles } from "../components/tiles";
import { StyleGuideSection } from "../components/style-guide/section";
import { Swatch } from "../components/style-guide/swatch";

const StyleGuide = () => {
    return (
        <Layout
            title="Style Guide"
            subtitle="A living document to maintain the relationship between design and code."
        >
            <div className="style-guide">
                <StyleGuideSection title="Colours" contain>
                    <div className="style-guide-swatches" role="group">
                        <Swatch title="Primary" value="primary" />
                        <Swatch title="Secondary" value="secondary" />
                        <Swatch title="Tertiary" value="tertiary" outline />
                        <Swatch title="quaternary" value="quaternary" />
                    </div>
                    <div className="style-guide-swatches" role="group">
                        <Swatch
                            title="Primary Gradient"
                            value="gradient-standard"
                        />
                        <Swatch
                            title="Secondary Gradient"
                            value="gradient-secondary"
                        />
                        <Swatch
                            title="Tertiary Gradient"
                            value="gradient-tertiary"
                        />
                    </div>
                </StyleGuideSection>

                <StyleGuideSection title="Type" contain>
                    <Content>
                        <h1>Header 1</h1>
                        <h2>Header 2</h2>
                        <h3>Header 3</h3>
                        <h4>Header 4</h4>
                        <h5>Header 5</h5>
                        <h6>Header 6</h6>

                        <p>
                            Lorem <em>ipsum</em> dolor sit amet consectetur
                            adipisicing elit. Magni dicta provident aliquam aut,
                            laboriosam maxime, autem nemo voluptate iusto
                            voluptas odio facilis perferendis quod a
                            <strong> reprehenderit tempora</strong> accusantium
                            commodi eveniet?
                        </p>

                        <h5>Unordered List</h5>
                        <ul>
                            <li>
                                Lorem Khaled Ipsum is a major key to success.
                                They never said winning was easy. Some people
                                can’t handle success.
                            </li>
                            <li>
                                A major key, never panic. Don’t panic, when it
                                gets crazy and rough, don’t panic, stay calm.
                            </li>{" "}
                            <li>
                                In life you have to take the trash out, if you
                                have trash in your life, take it out, throw it
                                away, get rid of it, major key
                            </li>
                            <li>
                                The weather is amazing, walk with me through the
                                pathway of more success. Take this journey with
                                me, Lion! Learning is cool, but knowing is
                                better, and I know the key to success. Eliptical
                                talk.
                            </li>
                        </ul>
                        <h5>Ordered List</h5>
                        <ol>
                            <li>
                                Lorem Khaled Ipsum is a major key to success.
                                They never said winning was easy. Some people
                                can’t handle success.
                            </li>
                            <li>
                                A major key, never panic. Don’t panic, when it
                                gets crazy and rough, don’t panic, stay calm.
                            </li>{" "}
                            <li>
                                In life you have to take the trash out, if you
                                have trash in your life, take it out, throw it
                                away, get rid of it, major key
                            </li>
                            <li>
                                The weather is amazing, walk with me through the
                                pathway of more success. Take this journey with
                                me, Lion! Learning is cool, but knowing is
                                better, and I know the key to success. Eliptical
                                talk.
                            </li>
                        </ol>
                    </Content>
                </StyleGuideSection>
                <StyleGuideSection title="Tiles">
                    <Tiles
                        items={[
                            {
                                title: "Item 1",
                                iconColour: "#93F2F4",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                tags: ["Mobile app", "Web app"],
                            },
                            {
                                title: "Item 2",
                                iconColour: "#BB6BD9",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                tags: ["Dashboard"],
                            },
                            {
                                title: "Item 3",
                                iconColour: "#F2C94C",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                tags: ["Mobile app", "February 2018"],
                            },
                        ]}
                    />
                </StyleGuideSection>
                <StyleGuideSection title="Highlight Box">
                    <Highlight title="Hello">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates explicabo odit, quibusdam incidunt
                            nemo, fuga eos reiciendis enim et deleniti pariatur.
                            Praesentium at velit aperiam dicta pariatur
                            architecto molestiae soluta.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates explicabo odit, quibusdam incidunt
                            nemo, fuga eos reiciendis enim et deleniti pariatur.
                            Praesentium at velit aperiam dicta pariatur
                            architecto molestiae soluta.
                        </p>
                    </Highlight>
                </StyleGuideSection>
                <StyleGuideSection title="Call To Action">
                    <CallToAction
                        title="Take action now"
                        links={[
                            { label: "Style Guide", link: "/style-guide" },
                            { label: "External Link", link: "/style-guide" },
                        ]}
                    />
                </StyleGuideSection>
            </div>
        </Layout>
    );
};

export default StyleGuide;
