import * as React from "react";
import { Layout } from "../components/layout";

const IndexPage = () => {
    return (
        <Layout title="Josh Post - Software Engineer">
            <div className="constrain-width">
                <h1>{"Kia ora, I'm Josh"}</h1>
                <p>
                    I am a digital product creator that works with companies to
                    build the best solutions for them and their customers.
                </p>
                <p>
                    My career began with an internship at the start-up incubator
                    Lightning Labs, I have worked with companies ranging from
                    start-ups to corporations. I has experience in industries
                    such as media, analytics, utilities, government,
                    not-for-profits and hospitality.
                </p>
                <p>
                    Although I am primarily a front-end engineer, I adapt to
                    whatever solution is needed. This means I have experience
                    with managing AWS resources, infrastructure-as-code with
                    tools like Terraform and building APIs using Python or Go.
                </p>
                <p>
                    I cover a broad spectrum of the digital product lifecycle,
                    from ideation, research, and validation, right through to
                    implementing Scrum methodoloy and delivering the end
                    products.
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;
