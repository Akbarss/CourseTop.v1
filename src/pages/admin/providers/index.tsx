/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import AdminLayout from '../../../admin/layout/AdminLayout';
import { selectProvider } from '../../../shared/redux/features/provider/providerSlice';
import { fetchProvider } from '../../../shared/redux/features/provider/providerThunks';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';

import ProviderCard from '../../../admin/components/Card/ProviderCard';

const Index: NextPage = () => {
  const providers = useAppSelector(selectProvider);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (providers.status === 'idle') {
      dispatch(fetchProvider());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Providers</title>
      </Head>
      <AdminLayout>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h1" fontSize={'25px'}>
            Providers
          </Typography>
          <NextLink href="/admin/providers/new">
            <Button variant="contained">Create</Button>
          </NextLink>
        </Stack>

        <Stack spacing={2} mt={5}>
          {providers.data.map((el) => (
            <ProviderCard key={el.id} {...el} />
          ))}
        </Stack>
      </AdminLayout>
    </>
  );
};

export default Index;
