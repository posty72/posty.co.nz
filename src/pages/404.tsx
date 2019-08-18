import { Location } from '@reach/router'
import * as React from 'react'
import Layout from '../components/layout'

interface NotFoundPageProps {
    location: Location
}

const NotFoundPage = ({ location }: NotFoundPageProps) => (
    <Layout location={location}>

        <h1>Not found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
)

export default NotFoundPage
