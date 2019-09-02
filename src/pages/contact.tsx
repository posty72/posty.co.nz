import * as React from 'react'
import ContactForm from '../components/contact-form'
import Layout from '../components/layout'

interface ContactPageProps {
    location: Location
}

const ContactPage = ({ location }: ContactPageProps) => (
    <Layout location={location}>
        <section>
            <h1>Contact</h1>
            <p>Get in touch if you want to talk anything digital! My favourite topics are fast, responsive web apps, conversational UIs, rugby and photography.</p>

            <ContactForm showTitle={false} />
        </section>
    </Layout>
)

export default ContactPage
