import * as React from "react";
import { ContactForm } from "../components/contact-form";
import { Layout } from "../components/layout";

const ContactPage = () => (
    <Layout title="Contact Me">
        <div className="constrain-width">
            <h1 className="heading-1">Get in touch with me</h1>
            <ContactForm showTitle={false} />
        </div>
    </Layout>
);

export default ContactPage;
