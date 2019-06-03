import ContactForm from '../components/contact-form';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';

const ContactPage = ({ location }) => (
    <Layout location={location}>
        <section>
            <h1>Contact</h1>
            <p>Get in touch if you want to talk anything digital! My favourite topics are fast, responsive web apps, conversational UIs, rugby and photography.</p>

            <ContactForm showTitle={false} />
        </section>
    </Layout>
);

ContactPage.propTypes = {
    location: PropTypes.object
};

export default ContactPage;
