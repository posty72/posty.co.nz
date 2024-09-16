"use client";

import { Layout } from "../components/layout";

const NotFoundPage = () => (
  <Layout title="404 - Page Not Found">
    <h1>Not found</h1>
    <p>{"You just hit a route that doesn't exist... the sadness."}</p>
  </Layout>
);

export default NotFoundPage;
