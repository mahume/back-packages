import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/Layout";

export default () => (
  <Layout>
    Hello World
    <Link to='/blog'>Blog</Link>
  </Layout>
);
