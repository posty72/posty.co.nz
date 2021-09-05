import * as React from "react";
import { Feature } from "../components/feature";
import { Layout } from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <div className="constrain-width">
                <Feature title="Hello" slug="/" excerpt="Hi there" />
            </div>
        </Layout>
    );
};

export default IndexPage;
