import { Breadcrumbs, Container, Typography } from '@mui/material';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CourseForm from '../../../admin/components/forms/CourseForm';
import AdminLayout from '../../../admin/layout/AdminLayout';
import { Provider } from '../../../shared/types/provider.d';

const Index = () => {
  const router = useRouter();

  const [provider, setProvider] = useState<Provider | null>();

  const fetchProviderBySlug = async (slug: string) => {
    const { data } = await axios.get(`/api/admin/provider/${slug}`);
    setProvider(data.body);
  };

  useEffect(() => {
    if (router.query.slug) {
      fetchProviderBySlug(router.query.slug as string);
    }
  }, [router.query?.slug]);

  return (
    <>
      <Head>
        <title>Admin - Provider - New Course</title>
      </Head>
      <AdminLayout>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/admin/providers">
            <Typography sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              Providers
            </Typography>
          </Link>
          <Link href={`/admin/providers/${provider?.slug}`}>
            <Typography sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              {provider?.title}
            </Typography>
          </Link>
          <Typography>New Course</Typography>
        </Breadcrumbs>

        <Container maxWidth="md">
          <CourseForm editMode={false} />
        </Container>
      </AdminLayout>
    </>
  );
};

export default Index;
