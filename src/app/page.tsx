import { Layout } from "@/components/layout";
import { Content } from "@/components/content";
import me from "@/images/me.jpeg";
import { Highlight } from "@/components/highlight";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <Layout
      title="Kia ora, I'm Josh"
      subtitle="I'm a Software Engineer"
      image={me}
    >
      <Content>
        <h4>{"I'm"} a software engineer</h4>
        <p>
          I have moved all over the product stack, having started as a graphic
          designer before moving in to creating frontend software. Since then{" "}
          {"I've"} made games, APIs, databases, websites, native apps, web apps
          and infrastructure.
        </p>
      </Content>
      <Highlight title="Creating things professionally since 2013" />
      <Content>
        <h3>Past</h3>
        <p>
          My career began with an internship at a start-up incubator, and since
          then I have worked with companies ranging from start-ups to
          corporations. I have worked with companies across many industries such
          as media, analytics, utilities, government, not-for-profits,
          hospitality and education.
        </p>
        <p>
          Although I am primarily a front-end engineer, I adapt to whatever
          solution is needed. This means I have experience with managing AWS
          resources, infrastructure-as-code with tools like Terraform and
          building APIs using Python or Go.
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
          {"I'm"} currently a software engineer for Plink Software in Nelson,
          NZ. Prior to this I worked at Pixel Fusion and Mediaworks in Auckland.
        </p>
        <p>
          I adopt an always-learning mindset. There is always more to learn,
          whether that be tooling, algorithms, processes or just about myself as
          a human person.
        </p>
        <p>
          I take a holistic approach to development so that I can understand the
          product, my team and {"stakeholder's"} problems. This means I need to
          be aware of a broad spectrum of the digital product lifecycle, from
          ideation, research, and validation, right through to using Scrum
          methodology and delivering to end users.
        </p>

        <br />
        <h3>Future</h3>
        <p>
          The future is unknown. But if you want to talk more about any
          opportunities, please get in touch.
        </p>
      </Content>
    </Layout>
  );
}
