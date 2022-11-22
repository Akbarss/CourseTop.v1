import { Avatar, Box, Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {
  createAuthor,
  updateAuthor,
} from '../../../../shared/redux/features/blog/authorThunks';
import { useAppDispatch } from '../../../../shared/redux/hooks';
import {
  BlogAuthor,
  CreateBlogAuthor,
} from '../../../../shared/types/blog/author';
import InputWithLabel from '../InputWithLable';

interface Props extends Partial<BlogAuthor> {
  handleClose: () => void;
  editMode: boolean;
}

const AuthorForm = (props: Props) => {
  const dispatch = useAppDispatch();

  const initValues: CreateBlogAuthor = {
    name: props.name || '',
    second_name: props.second_name || '',
    avatar: props.avatar || '',
    social_facebook: props.social_facebook || '',
    social_instagram: props.social_instagram || '',
    social_linkedin: props.social_linkedin || '',
    social_twitter: props.social_twitter || '',
  };

  const formschema = Yup.object().shape({
    name: Yup.string().required('required'),
    second_name: Yup.string().required('required'),
    avatar: Yup.string().url('must be a valid URL').required('required'),
    social_facebook: Yup.string().url('must be a valid URL').notRequired(),
    social_instagram: Yup.string().url('must be a valid URL').notRequired(),
    social_linkedin: Yup.string().url('must be a valid URL').notRequired(),
    social_twitter: Yup.string().url('must be a valid URL').notRequired(),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={formschema}
      onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
        try {
          if (props.editMode) {
            await dispatch(
              updateAuthor({
                id: props.id as string,
                body: values,
              })
            );
            setStatus({ success: true });
            setSubmitting(false);
            props.handleClose();
          } else {
            await dispatch(createAuthor({ ...values }));
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
                value={values.name}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'name-input'}
                touched={touched.name}
                errors={errors.name}
                name="name"
                label="Name"
                placeholder="Adam"
              />
            </Grid>
            <Grid item xs={6}>
              <InputWithLabel
                value={values.second_name}
                handleBlur={handleBlur}
                type="text"
                handleChange={handleChange}
                formId={'second_name-input'}
                touched={touched.second_name}
                errors={errors.second_name}
                name="second_name"
                label="Second name"
                placeholder="Smith"
              />
            </Grid>

            <Grid item xs={3} mt={1}>
              <Avatar
                src={values.avatar}
                sx={{ width: '80px', height: '80px' }}
              />
            </Grid>
            <Grid item xs={9}>
              <InputWithLabel
                value={values.avatar}
                handleBlur={handleBlur}
                type="url"
                handleChange={handleChange}
                formId={'avatar-input'}
                touched={touched.avatar}
                errors={errors.avatar}
                name="avatar"
                label="Avatar URL"
                placeholder="https://www.google.com/logo"
              />
            </Grid>

            <Grid item xs={6}>
              <InputWithLabel
                value={values.social_facebook}
                handleBlur={handleBlur}
                type="url"
                handleChange={handleChange}
                formId={'social_facebook-input'}
                touched={touched.social_facebook}
                errors={errors.social_facebook}
                name="social_facebook"
                label="Facebook"
                placeholder="https://www.facebook.com/company"
              />
            </Grid>

            <Grid item xs={6}>
              <InputWithLabel
                value={values.social_instagram}
                handleBlur={handleBlur}
                type="url"
                handleChange={handleChange}
                formId={'social_instagram-input'}
                touched={touched.social_instagram}
                errors={errors.social_instagram}
                name="social_instagram"
                label="Instagram"
                placeholder="https://www.instagram.com/company"
              />
            </Grid>

            <Grid item xs={6}>
              <InputWithLabel
                value={values.social_linkedin}
                handleBlur={handleBlur}
                type="url"
                handleChange={handleChange}
                formId={'social_linkedin-input'}
                touched={touched.social_linkedin}
                errors={errors.social_linkedin}
                name="social_linkedin"
                label="LinkedIn"
                placeholder="https://www.linkedin.com/company"
              />
            </Grid>

            <Grid item xs={6}>
              <InputWithLabel
                value={values.social_twitter}
                handleBlur={handleBlur}
                type="url"
                handleChange={handleChange}
                formId={'social_twitter-input'}
                touched={touched.social_twitter}
                errors={errors.social_twitter}
                name="social_twitter"
                label="Twitter"
                placeholder="https://www.twitter.com/company"
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

export default AuthorForm;
