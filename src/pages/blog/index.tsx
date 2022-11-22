import Layout from '@/client/components/Layout/Layout';
import React from 'react';
import Head from 'next/head';
import BlogContainer from '@/client/containers/Blog/BlogContainer';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Блог</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogContainer />
      </Layout>
    </>
  );
};

export default Blog;
