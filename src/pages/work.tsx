import * as React from "react";
import { Layout } from "../components/layout";
import { Preview } from "../components/preview";

const Work = () => {
    return (
        <Layout>
            <h1>Work</h1>
            <Preview
                title="Yonder"
                description="Worked on multiple projects as a part-time developer over two years. The products included were a real-time chatbot, a mobile app, panel and widget to be embedded on clients' websites."
            />
        </Layout>
    );
};

export default Work;
