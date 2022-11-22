import React from 'react';
import Head from 'next/head';
import Layout from '@/client/components/Layout/Layout';
import SpecificCourse from '@/client/containers/Courses/SpecificCourse';

export default function Subjects() {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SpecificCourse />
      </Layout>
    </>
  );
}
