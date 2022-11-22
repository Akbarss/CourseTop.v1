import React from 'react';
import Head from 'next/head';
import Layout from '@/client/components/Layout/Layout';
import SubjectContainer from '@/client/containers/Subjects/SubjectContainer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Data = any;

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch('https://coursetop.vercel.app/api/category');
  const data: Data = await res.json();

  return {
    props: {
      data: data.body,
    },
  };
};

export default function Subjects({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Subjects</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SubjectContainer data={data} />
      </Layout>
    </>
  );
}
