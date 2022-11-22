import { Breadcrumbs, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next';
import Head from 'next/head';

import NextLink from 'next/link';
import React from 'react';
import ProviderForm from '../../../admin/components/forms/ProviderForm';
import AdminLayout from '../../../admin/layout/AdminLayout';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Providers - New</title>
      </Head>
      <AdminLayout>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={NextLink} underline="hover" href="/admin/providers">
            Providers
          </Link>
          <Typography color="text.primary">New</Typography>
        </Breadcrumbs>

        <Box mt={4}>
          <ProviderForm editMode={false} />
        </Box>
      </AdminLayout>
    </>
  );
};

export default Index;
