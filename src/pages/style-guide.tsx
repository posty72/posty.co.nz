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
                </StyleGuideSection>
            </div>
        </Layout>
    );
};

export default StyleGuide;
