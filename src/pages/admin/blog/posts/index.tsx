import AdminLayout from '@/admin/layout/AdminLayout';
import React from 'react';
import Head from 'next/head';
import { Stack } from '@mui/system';
import { Button, Typography, Box, Grid } from '@mui/material';
import PostCard from '@/admin/components/Card/PostCard';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const index = (props: any) => {
  return (
    <>
      <Head>
        <title>Admin - Blog</title>
      </Head>
      <AdminLayout>
        <Box>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant="h4">Posts</Typography>
            <Link href={'/admin/blog/posts/new'}>
              <Button variant="contained">Create Post</Button>
            </Link>
          </Stack>
          <Grid
            container
            spacing={3}
            columns={{ xs: 2, sm: 8, md: 12 }}
            justifyContent={'center'}
            pt={7}
            pb={7}
          >
            {fakeCards.map((i) => (
              <Grid key={i.id} item xs={2} sm={5} md={4}>
                <PostCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AdminLayout>
    </>
  );
};

export default index;

const fakeCards = [
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
];
