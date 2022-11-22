import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import InputWithLabel from '../InputWithLable';
import { useAppDispatch } from '../../../../shared/redux/hooks';
import {
  BlogCategory,
  CreateBlogCategory,
} from '../../../../shared/types/blog/blog-category';
import {
  createBlogCategory,
  updateBlogCategory,
} from '../../../../shared/redux/features/blog/categoryThunks';

interface Props extends Partial<BlogCategory> {
  handleClose: () => void;
  editMode: boolean;
}

const BlogCategoryForm = (props: Props) => {
  const dispatch = useAppDispatch();

  const initValues: CreateBlogCategory = {
    title_uz: props.title_uz || '',
    title_ru: props.title_ru || '',
    slug: props.slug || '',
  };

  const formschema = Yup.object().shape({
    title_uz: Yup.string().required('required'),
    title_ru: Yup.string().required('required'),
    slug: Yup.string().required('required'),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={formschema}
      onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
        try {
          if (props.editMode) {
            await dispatch(
              updateBlogCategory({
                id: props.id as string,
                body: values,
              })
            );
            setStatus({ success: true });
            setSubmitting(false);
            props.handleClose();
          } else {
            await dispatch(createBlogCategory({ ...values }));
            setStatus({ success: true });
            setSubmitting(false);
            resetForm();
            props.handleClose();
          }
        } catch (error) {
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <Box component={'form'} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputWithLabel
                value={values.title_ru}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'title_ru-input'}
                touched={touched.title_ru}
                errors={errors.title_ru}
                name="title_ru"
                label="Title RU"
                placeholder="Статьи"
              />
            </Grid>
            <Grid item xs={6}>
              <InputWithLabel
                value={values.title_uz}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'title_uz-input'}
                touched={touched.title_uz}
                errors={errors.title_uz}
                name="title_uz"
                label="Title UZ"
                placeholder="Maqolalar"
              />
            </Grid>
            <Grid item xs={12}>
              <InputWithLabel
                value={values.slug}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'slug-input'}
                touched={touched.slug}
                errors={errors.slug}
                name="slug"
                label="Slug"
                placeholder="aritcles"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="success" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default BlogCategoryForm;
