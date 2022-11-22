import React from 'react';
import Head from 'next/head';
import Layout from '@/client/components/Layout/Layout';
import ResultsContainer from '@/client/containers/Results/ResultsContainer';

export default function Subjects() {
  return (
    <>
      <Head>
        <title>Results</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ResultsContainer name={''} />
      </Layout>
    </>
  );
}
