import * as React from "react";
import { Layout } from "../components/layout";
import { StyleGuideSection } from "../components/style-guide/section";
import { Swatch } from "../components/style-guide/swatch";

const StyleGuide = () => {
    return (
        <Layout title="Style Guide">
            <div className="style-guide">
                <StyleGuideSection title="Colours" contain>
                    <div className="style-guide-swatches" role="group">
                        <Swatch title="Primary" value="primary" />
                        <Swatch title="Secondary" value="secondary" />
                        <Swatch title="Tertiary" value="tertiary" outline />
                    </div>
                </StyleGuideSection>

                <StyleGuideSection title="Type" contain>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>

                    <p>
                        Lorem <em>ipsum</em> dolor sit amet consectetur
                        adipisicing elit. Magni dicta provident aliquam aut,
                        laboriosam maxime, autem nemo voluptate iusto voluptas
                        odio facilis perferendis quod a
                        <strong> reprehenderit tempora</strong> accusantium
                        commodi eveniet?
                    </p>

                    <h5>Unordered List</h5>
                    <ul>
                        <li>
                            Lorem Khaled Ipsum is a major key to success. They
                            never said winning was easy. Some people can’t
                            handle success.
                        </li>
                        <li>
                            A major key, never panic. Don’t panic, when it gets
                            crazy and rough, don’t panic, stay calm.
                        </li>{" "}
                        <li>
                            In life you have to take the trash out, if you have
                            trash in your life, take it out, throw it away, get
                            rid of it, major key
                        </li>
                        <li>
                            The weather is amazing, walk with me through the
                            pathway of more success. Take this journey with me,
                            Lion! Learning is cool, but knowing is better, and I
                            know the key to success. Eliptical talk.
                        </li>
                    </ul>
                    <h5>Ordered List</h5>
                    <ol>
                        <li>
                            Lorem Khaled Ipsum is a major key to success. They
                            never said winning was easy. Some people can’t
                            handle success.
                        </li>
                        <li>
                            A major key, never panic. Don’t panic, when it gets
                            crazy and rough, don’t panic, stay calm.
                        </li>{" "}
                        <li>
                            In life you have to take the trash out, if you have
                            trash in your life, take it out, throw it away, get
                            rid of it, major key
                        </li>
                        <li>
                            The weather is amazing, walk with me through the
                            pathway of more success. Take this journey with me,
                            Lion! Learning is cool, but knowing is better, and I
                            know the key to success. Eliptical talk.
                        </li>
                    </ol>
                </StyleGuideSection>
            </div>
        </Layout>
    );
};

export default StyleGuide;
