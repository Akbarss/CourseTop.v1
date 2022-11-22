import {
  Avatar,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AdminCourseCard from '../../../admin/components/Card/AdminCourseCard';
import ProviderCard from '../../../admin/components/Card/ProviderCard';
import ProviderForm from '../../../admin/components/forms/ProviderForm';
import AdminLayout from '../../../admin/layout/AdminLayout';
import ConfirmDeleteMenu from '../../../client/components/Menu/ConfirmDeleteMenu';
import {
  clearTemp,
  selectTempCourses,
} from '../../../shared/redux/features/courses/courseSlice';
import { fetchCoursesByProvider } from '../../../shared/redux/features/courses/courseThunk';
import { deleteProvider } from '../../../shared/redux/features/provider/providerThunks';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';
import { Provider } from '../../../shared/types/provider.d';

const Index = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [provider, setProvider] = useState<Provider | null>();
  const [title, setTitle] = useState('');
  const courses = useAppSelector(selectTempCourses);

  const [editMode, setEditMode] = useState(false);

  const fetchProviderBySlug = async (slug: string) => {
    const { data } = await axios.get(`/api/admin/provider/${slug}`);
    setProvider(data.body);
    setTitle(`Admin - Provider - ${data.body.title}`);
  };

  useEffect(() => {
    if (router.query.slug) {
      fetchProviderBySlug(router.query.slug as string);
    }
    if (router.query.slug) {
      dispatch(clearTemp());
      dispatch(
        fetchCoursesByProvider({
          provider_slug: router.query.slug as string,
          skip: 0,
          limit: 10,
        })
      );
    }
  }, [dispatch, router.query.slug]);

  const handleDelete = () => {
    dispatch(deleteProvider(provider?.id as string));

    router.push('/admin/providers');
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AdminLayout>
        <Stack
          direction="row"
          justifyContent={'space-between'}
          alignItems="center"
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/admin/providers">
              <Typography sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                Providers
              </Typography>
            </Link>
            <Typography color="text.primary">{provider?.title}</Typography>
          </Breadcrumbs>

          <Stack direction="row" gap="20px">
            <Button
              variant="contained"
              color="warning"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? 'Cancel' : 'Edit'}
            </Button>

            <ConfirmDeleteMenu
              handleDelete={handleDelete}
              targetId={provider?.id as string}
            />
          </Stack>
        </Stack>

        <Box mt={2}>{provider ? <ProviderCard {...provider} /> : ''}</Box>

        {editMode ? (
          <Paper sx={{ marginTop: 5, padding: '20px 15px' }}>
            <Typography color="text.primary" variant="subtitle1">
              Edit Provider
            </Typography>
            <Divider />
            <Box mt={3}>
              <ProviderForm editMode={true} {...provider} />
            </Box>
          </Paper>
        ) : (
          <Grid container spacing={2} columnSpacing={4} mt={3}>
            <Grid item xs={12}>
              <Paper sx={{ padding: '20px 15px' }}>
                <Typography color="text.primary" variant="subtitle1">
                  Galery
                </Typography>
                <Divider />

                <Stack direction={'row'} mt={1} flexWrap="wrap">
                  {provider?.photo_assets.map((photo, indx) => (
                    <Box key={indx}>
                      <Avatar
                        src={photo}
                        alt="gallery"
                        sx={{ borderRadius: 0, width: '100%', height: '150px' }}
                      >
                        photo
                      </Avatar>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} mb={3} mt={2}>
              <Stack>
                <Stack
                  direction={'row'}
                  alignItems="center"
                  justifyContent={'space-between'}
                >
                  <Typography color="text.primary" variant="subtitle1">
                    Courses
                  </Typography>
                  <Link
                    href={`/admin/providers/new-course?slug=${provider?.slug}`}
                  >
                    <Button variant="contained" color="success">
                      New Course
                    </Button>
                  </Link>
                </Stack>
                <Stack spacing={2} mt={2}>
                  {courses.data.map((course) => (
                    <AdminCourseCard key={course.id} {...course} />
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        )}
      </AdminLayout>
    </>
  );
};

export default Index;
