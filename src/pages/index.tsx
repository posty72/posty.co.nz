import * as React from "react";
import { Feature } from "../components/feature";
import { Layout } from "../components/layout";

const IndexPage = () => {
    return (
        <Layout title="Josh Post - Software Engineer">
            <div className="constrain-width">
                <Feature title="Hello" slug="/" excerpt="Hi there" />
            </div>
        </Layout>
    );
};

export default IndexPage;
