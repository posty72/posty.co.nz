import ContactForm from '../components/contact-form';
import React from 'react';

const ContactPage = () => {
    return (
        <section>
            <h1>Contact</h1>
            <p>Get in touch if you want to talk anything digital! My favourite topics are fast, responsive web apps, conversational UIs, rugby and photography.</p>

            <ContactForm showTitle={false} />
        </section>
    );
};

export default ContactPage;
