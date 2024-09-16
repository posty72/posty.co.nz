import * as React from "react";
import { ContactForm } from "@/components/contact-form";
import { Layout } from "@/components/layout";

const ContactPage = () => (
  <Layout title="Contact Me">
    <div className="constrain-width">
      <ContactForm />
    </div>
  </Layout>
);

export default ContactPage;
