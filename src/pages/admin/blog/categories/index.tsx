/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import BlogCategoryForm from '../../../../admin/components/forms/blog/BlogCategoryForm';
import AdminLayout from '../../../../admin/layout/AdminLayout';
import ConfirmDeleteMenu from '../../../../client/components/Menu/ConfirmDeleteMenu';
import BaseModal from '../../../../shared/components/modals/BaseModal';
import { selectBlogCategory } from '../../../../shared/redux/features/blog/blogSlice';
import {
  deleteBlogCategory,
  fetchBlogCategories,
} from '../../../../shared/redux/features/blog/categoryThunks';
import { useAppDispatch, useAppSelector } from '../../../../shared/redux/hooks';
import { BlogCategory } from '../../../../shared/types/blog/blog-category';

type Props = BlogCategory;

function BlogCategoryCard(props: Props) {
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(deleteBlogCategory(props.id));
  };

  //base modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <Card sx={{ padding: '20px 40px', minHeight: '100px' }}>
      <Stack
        direction={'row'}
        width="100%"
        justifyContent={'end'}
        spacing={2}
        mb={2}
      >
        <BaseModal
          btnText="Edit"
          title="Edit author"
          open={openModal}
          btnColor="warning"
          setOpen={setOpenModal}
          handleClose={handleClose}
          handleOpen={handleOpen}
          variant={'contained'}
        >
          <BlogCategoryForm
            editMode={true}
            handleClose={handleClose}
            {...props}
          />
        </BaseModal>

        <span>
          <ConfirmDeleteMenu handleDelete={handleConfirm} targetId={props.id} />
        </span>
      </Stack>
      <Stack direction={'row'} gap="20px">
        <Box>
          <Typography>{props.title_ru}</Typography>
          <Typography>{props.title_uz}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}

const Index: NextPage = () => {
  //redux
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectBlogCategory);

  //category
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (categories.status === 'idle') {
      dispatch(fetchBlogCategories());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Dashboard</title>
      </Head>
      <AdminLayout>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h1" fontSize={'25px'}>
            Blog Categories
          </Typography>
          <BaseModal
            btnText={'Create category'}
            btnColor={'info'}
            variant="contained"
            title={'Create new category'}
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          >
            <BlogCategoryForm handleClose={handleClose} editMode={false} />
          </BaseModal>
        </Stack>

        <Grid container spacing={2} mt={5}>
          {categories.data.map((category) => (
            <BlogCategoryCard key={category.id} {...category} />
          ))}
        </Grid>
      </AdminLayout>
    </>
  );
};

export default Index;
