/* eslint-disable filenames/match-regex */
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';

const NotFoundPage = ({ location }) => (
    <Layout location={location}>

        <h1>Not found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

NotFoundPage.propTypes = {
    location: PropTypes.object
};

export default NotFoundPage;
