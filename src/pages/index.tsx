import { Link } from "gatsby";
import * as React from "react";
import { Layout } from "../components/layout";
import { Profile } from "../components/profile";
import me from "../images/me.jpeg";

const IndexPage = () => {
    return (
        <Layout title="Kia ora, I'm Josh">
            <div className="constrain-width small">
                <Profile url={me} alt="Me" />

                <h3>Quick things about me:</h3>
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
                        I have grown at least <strong>7 avocado trees</strong>{" "}
                        from seed (some of these even survived a South Island
                        winter!)
                    </li>
                    <li>
                        According to the Myers Briggs personality test, I am an{" "}
                        <strong>Advocate</strong>
                    </li>
                    <li>
                        I once worked in a <strong>chocolate factory</strong>
                    </li>
                </ol>

                <hr />
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

                <hr />
                <h3>Present</h3>
                <p>
                    {"I'm"} currently a software engineer for Plink Software in
                    Nelson, NZ. Prior to this I worked at Pixel Fusion and
                    Mediaworks in Auckland.
                </p>
                <p>
                    I adopt an always-learning mindset. There is always more to
                    learn, whether that be tooling, algorithims, processes or
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

                <hr />
                <h3>Future</h3>
                <p>
                    The future is unknown. But if you want to talk more about
                    any opportunites, please get in touch.
                </p>
                <div className="splash">
                    <Link to="/contact" className="button primary">
                        Contact Me
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
