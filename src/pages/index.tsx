import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { CallToAction } from "../components/call-to-action";
import { Content } from "../components/content";
import { Highlight } from "../components/highlight";
import { Layout } from "../components/layout";

export interface ImageQuery {
    file: ImageFile;
}

export interface ImageFile {
    childImageSharp: {
        fluid: {
            src: string;
            srcSet: string;
            srcWebp: string;
            srcSetWebp: string;
        };
    };
}

export const query = graphql`
    query {
        file(relativePath: { eq: "me.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
    }
`;

const IndexPage = ({ data }: PageProps) => {
    const { file } = data as ImageQuery;

    return (
        <Layout
            title="Kia ora, I'm Josh"
            subtitle="I'm a Software Engineer"
            image={file}
        >
            <Content>
                <h4>
                    {"I'm"} a software engineer who has been working since 2013.{" "}
                </h4>
                <p>
                    I have moved all over the product stack, having started as a
                    graphic designer before moving in to creating frontend
                    software. Since then {"I've"} made games, APIs, databases,
                    websites, native apps, web apps and infrastructure.
                </p>
            </Content>
            <Highlight title="Quick facts about me:">
                <ol>
                    <li>
                        I have been creating apps and websites professionally
                        since <strong>2013</strong>
                    </li>
                    <li>
                        My favourite football player is{" "}
                        <strong>Virgil Van Dijk</strong>
                    </li>
                    <li>
                        {"I've"} produced a{" "}
                        <a
                            href="https://youtu.be/4mtn5P5DGg4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            music video
                        </a>
                    </li>
                    <li>
                        I have grown at least <strong>7 avocado trees</strong>{" "}
                        from seed (some of these even survived a South Island
                        winter!)
                    </li>
                    <li>
                        According to the Myers Briggs personality test, I am an{" "}
                        <strong>Advocate</strong> (INFJ)
                    </li>
                    <li>
                        I once worked in a <strong>chocolate factory</strong>
                    </li>
                </ol>
            </Highlight>
            <Content>
                <h3>Past</h3>
                <p>
                    My career began with an internship at a start-up incubator,
                    and since then I have worked with companies ranging from
                    start-ups to corporations. I have worked with companies
                    across many industries such as media, analytics, utilities,
                    government, not-for-profits, hospitality and education.
                </p>
                <p>
                    Although I am primarily a front-end engineer, I adapt to
                    whatever solution is needed. This means I have experience
                    with managing AWS resources, infrastructure-as-code with
                    tools like Terraform and building APIs using Python or Go.
                </p>
            </Content>
            <CallToAction
                title="See my work"
                links={[{ label: "View work", link: "/work" }]}
            />
            <Content>
                <br />
                <h3>Present</h3>
                <p>
                    {"I'm"} currently a software engineer for Plink Software in
                    Nelson, NZ. Prior to this I worked at Pixel Fusion and
                    Mediaworks in Auckland.
                </p>
                <p>
                    I adopt an always-learning mindset. There is always more to
                    learn, whether that be tooling, algorithms, processes or
                    just about myself as a human person.
                </p>
                <p>
                    I take a holistic approach to development so that I can
                    understand the product, my team and {"stakeholder's"}{" "}
                    problems. This means I need to be aware of a broad spectrum
                    of the digital product lifecycle, from ideation, research,
                    and validation, right through to using Scrum methodology and
                    delivering to end users.
                </p>

                <br />
                <h3>Future</h3>
                <p>
                    The future is unknown. But if you want to talk more about
                    any opportunities, please get in touch.
                </p>
            </Content>
        </Layout>
    );
};

export default IndexPage;
