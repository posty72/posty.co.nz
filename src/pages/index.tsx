import * as React from "react";
import { Feature } from "../components/feature";
import { Layout } from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <section>
                <Feature title="Hello" slug="/" excerpt="Hi there" />
            </section>
        </Layout>
    );
};

export default IndexPage;
