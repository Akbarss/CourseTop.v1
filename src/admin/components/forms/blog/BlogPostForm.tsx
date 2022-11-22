import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Avatar,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  Tooltip,
} from '@mui/material';
import InputWithLabel from '../InputWithLable';
import { SmartToyOutlined } from '@mui/icons-material';
import slugify from 'slugify';
import SelectWithLabel from '../SelectWithLabel';
import RichText from '@/shared/components/FormElements/RichText';
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks';
import {
  selectBlogAuthor,
  selectBlogCategory,
} from '@/shared/redux/features/blog/blogSlice';
import { BlogPost } from '../../../../shared/types/blog/blog';
import {
  fetchBlogCategories,
  createBlogCategory,
} from '../../../../shared/redux/features/blog/categoryThunks';
import { fetchAuthors } from '../../../../shared/redux/features/blog/authorThunks';
import { updateBlogPost } from '@/shared/redux/features/blog/blogPostThunks';
import { createBlogPost } from '../../../../shared/redux/features/blog/blogPostThunks';
import { selectBlogPostStatus } from '../../../../shared/redux/features/blog/blogSlice';

interface Props extends Partial<BlogPost> {
  editMode: boolean;
}

const BlogPostForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const authors = useAppSelector(selectBlogAuthor);
  const categories = useAppSelector(selectBlogCategory);
  const status = useAppSelector(selectBlogPostStatus);

  const [body, setBody] = useState(props.body || '');

  const initValues = {
    title: props.title || '',
    slug: props.slug || '',
    cover_image: props.cover_image || '',
    preview_text: props.preview_text || '',
    author: props.author?.id || '',
    category: props.category?.id || '',
    read_time: props.read_time || 0,
  };

  const formschema = Yup.object().shape({
    title: Yup.string().required('required'),
    slug: Yup.string().required('required'),
    cover_image: Yup.mixed().notRequired(),
    author: Yup.string().required('required'),
    category: Yup.string(),
    read_time: Yup.number().required('required'),
    // published: Yup.string().required('required')
  });

  useEffect(() => {
    if (authors.data.length === 0) {
      dispatch(fetchAuthors());
    }
    if (categories.data.length === 0) {
      dispatch(fetchBlogCategories());
    }
  }, []);

  return (
    <Formik
      initialValues={initValues}
      validationSchema={formschema}
      onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
        try {
          if (props.editMode) {
            await dispatch(
              updateBlogPost({
                data: { ...values, body: body, read_time: values.read_time },
                id: props.id as string,
              })
            );
          } else {
            await dispatch(createBlogPost({ ...values, body }));
          }

          setStatus({ success: true });
          setSubmitting(false);
          resetForm();
        } catch (error) {
          setStatus({ success: true });
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
        setFieldValue,
        setValues,
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
                label="Blog title"
                placeholder="How to succeed as an engineer"
              />
            </Grid>
            <Grid item xs={11}>
              <InputWithLabel
                value={values.slug}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'slug-input'}
                touched={touched.slug}
                errors={errors.slug}
                name="slug"
                label="Blog slug"
                placeholder="how-to-succeed-as-an-engineer"
              />
            </Grid>
            <Grid item xs={1} mt={4}>
              <Tooltip title="automatically generate slug">
                <span>
                  <IconButton
                    type="button"
                    disabled={!values.title}
                    size="large"
                    sx={{ border: '1px solid grey', cursor: 'pointer' }}
                    onClick={() =>
                      setValues({
                        ...values,
                        slug: slugify(values.title, { lower: true }),
                      })
                    }
                  >
                    <SmartToyOutlined />
                  </IconButton>
                </span>
              </Tooltip>
            </Grid>

            {/* -------------------------------COVER IMAGE-------------------------------- */}

            <Grid item xs={12} mt={2}>
              <Box
                bgcolor={'#ffff'}
                minWidth="400px"
                minHeight={'300px'}
                borderRadius="5px"
                display={'flex'}
                justifyContent={'center'}
                alignItems="center"
                p={2}
              >
                <Avatar
                  src={values.cover_image}
                  sx={{ borderRadius: '0px', width: '600px', height: '100%' }}
                >
                  Cover image
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={12} mt={3}>
              <InputWithLabel
                value={values.cover_image}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'file-url-input'}
                touched={touched.cover_image}
                errors={errors.cover_image}
                name="cover_image"
                label="Cover image URL"
                placeholder="https://unsplash.com/random"
              />
            </Grid>

            {/* ----------------------------------------------------------------------- */}
            <Grid item xs={12} md={4} mt={3}>
              <SelectWithLabel
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId="author-input"
                name="author"
                label="Blog author"
                placeholder="Select an author"
                touched={touched.author}
                errors={errors.author}
                value={values.author}
              >
                {authors.data.map((author) => (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={4} mt={3}>
              <SelectWithLabel
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId="category-input"
                name="category"
                label="Blog category"
                placeholder="Select a category"
                touched={touched.category}
                errors={errors.category}
                value={values.category}
              >
                {categories.data.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.title_uz}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={4} mt={3}>
              <InputWithLabel
                value={values.read_time}
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'read-time-input'}
                touched={touched.read_time}
                errors={errors.read_time}
                name="read_time"
                label="Read time in minutes"
                placeholder="5"
              />
            </Grid>
            {/* <Grid item xs={12} md={2} mt={3}>
              <InputWithLabel
                value={values.published}
                type="date"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'published-date-input'}
                touched={touched.published}
                errors={errors.published}
                name="published"
                label="Published date"
                placeholder="5"
              />
            </Grid> */}
            {/* 
            <Grid item xs={12} mt={3}>
              <Stack spacing={1}>
                <InputLabel htmlFor={'seo_description'}>
                  SEO description
                </InputLabel>
                <OutlinedInput
                  name={'seo_description'}
                  id={'seo_description'}
                  value={values.seo_description}
                  type="text"
                  multiline
                  rows={3}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(
                    touched.seo_description && errors.seo_description
                  )}
                />
                {touched.seo_description && errors.seo_description && (
                  <FormHelperText error>
                    {errors.seo_description}
                  </FormHelperText>
                )}
              </Stack>
            </Grid> */}

            <Grid item xs={12} mt={3}>
              <RichText value={body} setValue={setBody} />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                disabled={
                  status === 'CREATE_POST_LOADING' ||
                  status === 'UPDATE_POST_LOADING'
                }
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default BlogPostForm;
