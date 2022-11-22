import BlogPostForm from '@/admin/components/forms/blog/BlogPostForm';
import AdminLayout from '@/admin/layout/AdminLayout';
import { Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { BlogPost } from '../../../../../shared/types/blog/blog';
import { request } from '../../../../../shared/utils/Axios';

const index = () => {
  const [post, setPost] = useState<BlogPost | null>(null);

  const fetchPostBySlug = async () => {
    const res = await request.get(`/api/admin/blog/post/`)
    setPost(res.data.body)
  }


  return (
    <>
      <Head>
        <title>Admin - New</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <Stack direction={'column'} spacing={1} pb={8}>
          <Typography variant="h4" mb={3}>
            Posts
          </Typography>
          <BlogPostForm editMode={false} />
        </Stack>
      </AdminLayout>
    </>
  );
};

export default index;
