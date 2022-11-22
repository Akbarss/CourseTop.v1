import React from 'react';
import Head from 'next/head';
import Layout from '@/client/components/Layout/Layout';
import ContactContainer from '@/client/containers/ContactUs/ContactContainer';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ContactContainer />
      </Layout>
    </>
  );
}
