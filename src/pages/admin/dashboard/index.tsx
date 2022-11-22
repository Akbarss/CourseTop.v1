import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import AdminLayout from '../../../admin/layout/AdminLayout';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Dashboard</title>
      </Head>
      <AdminLayout>
        <div>stats, insights</div>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
