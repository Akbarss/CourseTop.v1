/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Course,
  COURSE_LEVEL,
  COURSE_TYPE,
  DAYS,
  PRICE_INFO,
  TEACH_LANG,
} from '../../../shared/types/course.d';
import * as Yup from 'yup';
import { FieldArray, Formik } from 'formik';
import InputWithLabel from './InputWithLable';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';
import {
  createCourse,
  editCourse,
} from '../../../shared/redux/features/courses/courseThunk';
import { Box } from '@mui/system';
import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import SelectWithLabel from './SelectWithLabel';
import {
  selectCategory,
  selectSubcategory,
} from '../../../shared/redux/features/category/categorySlice';
import {
  fetchCategories,
  fetchSubcategories,
} from '../../../shared/redux/features/category/categoryThunk';
import RichText from '../../../shared/components/FormElements/RichText';
import { Delete } from '@mui/icons-material';
import { selectProvider } from '../../../shared/redux/features/provider/providerSlice';
import { fetchProvider } from '../../../shared/redux/features/provider/providerThunks';
import states from 'states.json';

interface Props extends Partial<Course> {
  editMode: boolean;
}

const CourseForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const subcategories = useAppSelector(selectSubcategory);
  const categories = useAppSelector(selectCategory);
  const provider = useAppSelector(selectProvider);

  useEffect(() => {
    if (subcategories.status === 'idle') {
      dispatch(fetchSubcategories());
    }
    if (categories.status === 'idle') {
      dispatch(fetchCategories());
    }
    if (provider.status === 'idle') {
      dispatch(fetchProvider());
    }
  }, []);

  const [long_description, setLongDescription] = useState(
    props.long_description || ''
  );

  const initValues = {
    title: props.title || '',
    slug: props.slug || '',
    provider_id: props.provider_id || '',
    course_type: props.course_type || COURSE_TYPE.OFLINE,
    level: props.level || COURSE_LEVEL.BEGINNER,
    teaching_lang: props.teaching_lang || TEACH_LANG.UZ,
    subcategory_id: props.subcategory_id || '',
    category_id: props.category_id || '',
    duration_day: props.duration || 0,
    duration_hour: props.duration || 0,
    duration_minute: props.duration || 0,
    price: props.price || 0,
    price_info: props.price_info || PRICE_INFO.FULL,
    short_description: props.short_description || '',
    num_seats: props.num_seats || 0,
    start_date: props.start_date || '',
    schedule: props.schedule || [],
    cover_image: props.cover_image || '',
    state: props.state || '',
    city: props.city || '',
    address: props.address || '',
    lat: props.lat || 0,
    lon: props.lon || 0,
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().required('required'),
    slug: Yup.string().required('required'),
    cover_image: Yup.string().required('required'),
    state: Yup.string().notRequired(),
    city: Yup.string().notRequired(),
    address: Yup.string().notRequired(),
    lat: Yup.string().notRequired(),
    lon: Yup.string().notRequired(),
    provider_id: Yup.string().required('required'),
    course_type: Yup.mixed<COURSE_TYPE>().oneOf(Object.values(COURSE_TYPE)),
    category_id: Yup.string().required('required'),
    subcategory_id: Yup.string().required('required'),
    level: Yup.mixed<COURSE_LEVEL>().oneOf(Object.values(COURSE_LEVEL)),
    short_description: Yup.string().required('required'),
    price: Yup.number().required(),
    teaching_lang: Yup.mixed<TEACH_LANG>().oneOf(Object.values(TEACH_LANG)),
    price_info: Yup.mixed<PRICE_INFO>().oneOf(Object.values(PRICE_INFO)),
    num_seats: Yup.number().notRequired(),
    start_date: Yup.string().notRequired(),
    schedule: Yup.array()
      .of(
        Yup.object().shape({
          day: Yup.string().required(),
          time: Yup.string().required(),
        })
      )
      .notRequired(),
  });

  const convertToMls = (day = 0, hours = 0, minutes = 0) => {
    const dayToMls = +day * 86400000;
    const hourToMls = +hours * 3600000;
    const minuteToMls = +minutes * 60000;
    return dayToMls + hourToMls + minuteToMls;
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={formSchema}
      onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
        try {
          const { duration_day, duration_hour, duration_minute, ...others } =
            values;
          const duration = convertToMls(
            duration_day,
            duration_hour,
            duration_minute
          );

          if (props.editMode) {
            await dispatch(
              editCourse({
                course_id: props.id as string,
                payload: { ...others, long_description, duration },
              })
            );
            setStatus({ success: true });
            setSubmitting(false);
          } else {
            const { duration_day, duration_hour, duration_minute, ...others } =
              values;
            const duration = convertToMls(
              duration_day,
              duration_hour,
              duration_minute
            );
            await dispatch(
              createCourse({ ...others, long_description, duration })
            );
            setStatus({ success: true });
            setSubmitting(false);
            resetForm();
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
        isSubmitting,
        touched,
        values,
      }) => (
        <Box component={'form'} noValidate onSubmit={handleSubmit} mb={10}>
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12}>
              <Avatar
                sx={{ borderRadius: 0, width: '300px', height: '100%' }}
                src={values.cover_image}
              >
                cover image
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <InputWithLabel
                value={values.cover_image}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'cover_image-input'}
                touched={touched.cover_image}
                errors={errors.cover_image}
                name="cover_image"
                label="Cover Image URL"
                placeholder="https://www.google.com/image/"
              />
            </Grid>
            <Grid item xs={12}>
              <SelectWithLabel
                value={values.provider_id}
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={'provider_id'}
                label={'Provider'}
                formId="provider_id-select"
                placeholder={'Ofline'}
                touched={touched.provider_id}
                errors={errors.provider_id}
              >
                {provider.data.map((el) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.title}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>
            <Grid item xs={12} md={6}>
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
                placeholder="Учимся играть на гитаре"
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
                placeholder="uchimsya-igrat-na-gitare"
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <SelectWithLabel
                value={values.course_type}
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={'course_type'}
                label={'Course type'}
                formId="course_type-select"
                placeholder={'Ofline'}
                touched={touched.course_type}
                errors={errors.course_type}
              >
                {Object.values(COURSE_TYPE).map((el) => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <SelectWithLabel
                value={values.level}
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={'level'}
                label={'Level'}
                formId="level-select"
                placeholder={'Beginner'}
                touched={touched.level}
                errors={errors.level}
              >
                {Object.values(COURSE_LEVEL).map((el) => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <SelectWithLabel
                value={values.teaching_lang}
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={'teaching_lang'}
                label={'Teaching language'}
                formId="teaching_lang-select"
                placeholder={'RU'}
                touched={touched.teaching_lang}
                errors={errors.teaching_lang}
              >
                {Object.values(TEACH_LANG).map((el) => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={6}>
              <SelectWithLabel
                value={values.category_id}
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={'category_id'}
                label={'Category'}
                formId="category_id-select"
                placeholder={'English'}
                touched={touched.category_id}
                errors={errors.category_id}
              >
                {categories.data.map((el) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.title}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={6}>
              {values.category_id ? (
                <SelectWithLabel
                  value={values.subcategory_id}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  name={'subcategory_id'}
                  label={'Subcategory'}
                  formId="subcategory_id-select"
                  placeholder={'IELTS'}
                  touched={touched.subcategory_id}
                  errors={errors.subcategory_id}
                >
                  {subcategories.data
                    .filter((sub) => sub.category_id === values.category_id)
                    .map((el) => (
                      <MenuItem key={el.id} value={el.id}>
                        {el.title}
                      </MenuItem>
                    ))}
                </SelectWithLabel>
              ) : (
                ''
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              <InputWithLabel
                value={values.duration_day}
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'duration_day-input'}
                touched={touched.duration_day}
                errors={errors.duration_day}
                name="duration_day"
                label="Duration in days"
                placeholder="3"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <InputWithLabel
                value={values.duration_hour}
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'duration_hour-input'}
                touched={touched.duration_hour}
                errors={errors.duration_hour}
                name="duration_hour"
                label="Duration in hours"
                placeholder="2"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <InputWithLabel
                value={values.duration_minute}
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'duration_minute-input'}
                touched={touched.duration_minute}
                errors={errors.duration_minute}
                name="duration_minute"
                label="Duration in minutes"
                placeholder="1"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <InputWithLabel
                value={values.price}
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'price-input'}
                touched={touched.price}
                errors={errors.price}
                name="price"
                label="Price USZ"
                placeholder="1"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectWithLabel
                value={values.price_info}
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={'price_info'}
                label={'Price info'}
                formId="price_info-select"
                placeholder={'price_info'}
                touched={touched.price_info}
                errors={errors.price_info}
              >
                {Object.values(PRICE_INFO).map((el) => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </SelectWithLabel>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputWithLabel
                value={values.num_seats}
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'num_seats-input'}
                touched={touched.num_seats}
                errors={errors.num_seats}
                name="num_seats"
                label="Available seats"
                placeholder="12"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <InputWithLabel
                value={values.start_date}
                type="date"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'start_date-input'}
                touched={touched.start_date}
                errors={errors.start_date}
                name="start_date"
                label="Start date"
                placeholder="12"
              />
            </Grid>
            {values.course_type !== 'ONLINE' ? (
              <>
                <Grid item xs={12} md={6}>
                  <SelectWithLabel
                    value={values.state}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    name={'state'}
                    label={'Region'}
                    formId="state-select"
                    placeholder={'Toshkent'}
                    touched={touched.state}
                    errors={errors.state}
                  >
                    {states.map((st) => (
                      <MenuItem key={st._id} value={st.name}>
                        {st.name}
                      </MenuItem>
                    ))}
                  </SelectWithLabel>
                </Grid>
                <Grid item xs={12} md={6}>
                  <SelectWithLabel
                    value={values.city}
                    handleBlur={handleBlur}
                    formId="city-select"
                    handleChange={handleChange}
                    name={'city'}
                    label={'City'}
                    placeholder={'Toshkent city'}
                    touched={touched.city}
                    errors={errors.city}
                  >
                    {states
                      .find((state) => state.name === values.state)
                      ?.cities.map((city) => (
                        <MenuItem key={city.id} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </SelectWithLabel>
                </Grid>
                <Grid item xs={12}>
                  <InputWithLabel
                    value={values.address}
                    type="text"
                    multiline={true}
                    rows={3}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    formId={'address-input'}
                    touched={touched.address}
                    errors={errors.address}
                    name="address"
                    label="Address"
                    placeholder="Hamil Olimjon, 123"
                  />
                </Grid>
              </>
            ) : (
              ''
            )}
            <Grid item xs={12} mt={3} mb={3}>
              <Typography>Schedule</Typography>
              <Divider />
              <FieldArray
                name="schedule"
                render={(helper) => (
                  <Grid container spacing={2} alignItems="center" mt={2}>
                    {values.schedule.map((el, indx) => (
                      <>
                        <Grid item xs={5} spacing={2} key={indx}>
                          <SelectWithLabel
                            value={el.day}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            name={`schedule[${indx}].day`}
                            label={'Day'}
                            formId={'schedule-select-' + indx}
                            placeholder={'Monday'}
                            touched={false}
                            errors={false}
                          >
                            {Object.values(DAYS).map((day) => (
                              <MenuItem key={day} value={day}>
                                {day}
                              </MenuItem>
                            ))}
                          </SelectWithLabel>
                        </Grid>
                        <Grid item xs={5} spacing={2}>
                          <InputWithLabel
                            value={el.time}
                            type="time"
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            formId={'time-input-' + indx}
                            touched={false}
                            errors={false}
                            name={`schedule[${indx}].time`}
                            label="Time"
                            placeholder="12:00"
                          />
                        </Grid>
                        <Grid item xs={2} spacing={2}>
                          <IconButton
                            size="large"
                            color="error"
                            type="button"
                            onClick={() => helper.remove(indx)}
                          >
                            <Delete />
                          </IconButton>
                        </Grid>
                      </>
                    ))}
                    <Grid item xs={12} mt={2} mb={2}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => helper.push({ day: '', time: '' })}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                )}
              />
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <InputWithLabel
                value={values.short_description}
                type="text"
                handleBlur={handleBlur}
                multiline={true}
                rows={3}
                handleChange={handleChange}
                formId={'short_description-input'}
                touched={touched.short_description}
                errors={errors.short_description}
                name="short_description"
                label="Short description"
                placeholder="text..."
              />
            </Grid>

            <Grid item xs={12}>
              <RichText
                label="Long description"
                value={long_description}
                setValue={setLongDescription}
              />
            </Grid>
            <Grid item xs={12} mt={6}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                fullWidth
                disabled={isSubmitting}
              >
                Save
              </Button>
              <Typography>{JSON.stringify(errors)}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default CourseForm;
