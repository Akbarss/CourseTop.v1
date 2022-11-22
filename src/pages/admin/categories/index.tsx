/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import BaseModal from '../../../shared/components/modals/BaseModal';
import {
  selectCategory,
  selectSubcategory,
} from '../../../shared/redux/features/category/categorySlice';
import {
  fetchCategories,
  fetchSubcategories,
} from '../../../shared/redux/features/category/categoryThunk';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';
import AdminLayout from '../../../admin/layout/AdminLayout';
import CategoryForm from '../../../admin/components/forms/CategoryForm';
import CategorySection from '../../../admin/components/Sections/CategorySection';

const Index: NextPage = () => {
  //redux
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);
  const subcategory = useAppSelector(selectSubcategory);

  //category
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (categories.status === 'idle') {
      dispatch(fetchCategories());
    }
    if (subcategory.status === 'idle') {
      dispatch(fetchSubcategories());
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
            Categories
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
            <CategoryForm handleClose={handleClose} editMode={false} />
          </BaseModal>
        </Stack>
        <CategorySection categories={categories} subcategory={subcategory} />
      </AdminLayout>
    </>
  );
};

export default Index;
