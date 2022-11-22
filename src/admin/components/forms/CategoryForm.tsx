import { Category } from '@prisma/client';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { CreateCategory } from '../../../shared/types/category.d';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import InputWithLabel from './InputWithLable';
import { useAppDispatch } from '../../../shared/redux/hooks';
import {
  createCategory,
  editCategory,
} from '../../../shared/redux/features/category/categoryThunk';

interface Props extends Partial<Category> {
  handleClose: () => void;
  editMode: boolean;
}

const CategoryForm = (props: Props) => {
  const dispatch = useAppDispatch();

  const initValues: CreateCategory = {
    title: props.title || '',
    icon: props.icon || '',
    slug: props.slug || '',
  };

  const formschema = Yup.object().shape({
    title: Yup.string().required('required'),
    icon: Yup.string().required('required'),
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
              editCategory({
                category_id: props.id as string,
                payload: values,
              })
            );
            setStatus({ success: true });
            setSubmitting(false);
            props.handleClose();
          } else {
            await dispatch(createCategory({ ...values }));
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
            <Grid item xs={12}>
              <InputWithLabel
                value={values.title}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'title-input'}
                touched={touched.title}
                errors={errors.title}
                name="title"
                label="Title"
                placeholder="English"
              />
            </Grid>
            <Grid item xs={12}>
              <InputWithLabel
                value={values.icon}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'icon-input'}
                touched={touched.icon}
                errors={errors.icon}
                name="icon"
                label="Icon URL"
                placeholder="https://www.unsplash.com/icon"
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
                placeholder="english"
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

export default CategoryForm;
