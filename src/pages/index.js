import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Hero from '../components/hero';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <Hero></Hero>
      <div></div>
      <div></div>
    </div>
  </Layout>
);

export default IndexPage;
