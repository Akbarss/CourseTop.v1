import React from 'react';
import Head from 'next/head';
import Layout from '@/client/components/Layout/Layout';
import CoursesContainer from '@/client/containers/Courses/CourseContainer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';

type Data = any;

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch('https://coursetop.vercel.app/api/course/category/');
  const data: Data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Subjects({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <CoursesContainer data={data} />
      </Layout>
    </>
  );
}
