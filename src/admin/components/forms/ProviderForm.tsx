import React, { useState } from 'react';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { Provider } from '../../../shared/types/provider.d';
import * as Yup from 'yup';
import { FieldArray, Formik } from 'formik';
import { Box } from '@mui/system';
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Stack,
} from '@mui/material';
import InputWithLabel from './InputWithLable';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SelectWithLabel from './SelectWithLabel';
import states from 'states.json';
import { Delete, PlusOne } from '@mui/icons-material';
import {
  createProvider,
  editProvider,
} from '../../../shared/redux/features/provider/providerThunks';
import RichText from '../../../shared/components/FormElements/RichText';

interface Props extends Partial<Provider> {
  editMode: boolean;
}

const ProviderForm: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState<any>(props.phone || '');
  const [about, setAbout] = useState(props.about || '');

  const initValues = {
    title: props.title || '',
    slug: props.slug || '',
    ceo_name: props.ceo_name || '',
    address: props.address || '',
    state: props.state || states[0].name,
    city: props.city || '',
    logo: props.logo || '',
    photo_assets: props.photo_assets || [],
    video_assets: props.video_assets || [],
    about: props.about || '',
    website_url: props.website_url || '',
    telegram_url: props.telegram_url || '',
    instagram_url: props.instagram_url || '',
    facebook_url: props.facebook_url || '',
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().required('required'),
    slug: Yup.string().required('required'),
    ceo_name: Yup.string().required('required'),
    about: Yup.string().notRequired(),
    state: Yup.string().required('required'),
    city: Yup.string().required('required'),
    address: Yup.string().required('required'),
    logo: Yup.string().url('must be a valid url').required('required'),
    photo_assets: Yup.array()
      .of(Yup.string().url('must be a valid url'))
      .notRequired(),
    video_assets: Yup.array()
      .of(Yup.string().url('must be a valid url'))
      .notRequired(),
    website_url: Yup.string().url().notRequired(),
    telegram_url: Yup.string().url().notRequired(),
    instagram_url: Yup.string().url().notRequired(),
    facebook_url: Yup.string().url().notRequired(),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={formSchema}
      onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
        try {
          if (props.editMode) {
            await dispatch(
              editProvider({
                provider_id: props.id as string,
                payload: { ...values, phone, about },
              })
            );
            setStatus({ success: true });
            setSubmitting(false);
          } else {
            await dispatch(createProvider({ ...values, phone, about }));
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
        touched,
        values,
      }) => (
        <Box component={'form'} noValidate onSubmit={handleSubmit} mb={10}>
          <Grid container spacing={2}>
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
                placeholder="Khan Academy"
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
                placeholder="khan-akademy"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputWithLabel
                value={values.ceo_name}
                type="text"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'ceo-name-input'}
                touched={touched.ceo_name}
                errors={errors.ceo_name}
                name="ceo_name"
                label="CEO name"
                placeholder="Sal Khan"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor={'phone-num'}>Phone</InputLabel>

                <PhoneInput
                  onChange={setPhone}
                  value={phone}
                  defaultCountry="UZ"
                  required
                  international
                />
              </Stack>
            </Grid>

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

            <Grid item xs={12}>
              <InputWithLabel
                value={values.logo}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'logo-input'}
                touched={touched.logo}
                errors={errors.logo}
                name="logo"
                label="Logo URL"
                placeholder="https://www.logo.com"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputWithLabel
                value={values.website_url}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'web-input'}
                touched={touched.website_url}
                errors={errors.website_url}
                name="website_url"
                label="Website URL"
                placeholder="https://www.khanacademy.org"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputWithLabel
                value={values.telegram_url}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'telegram_url-input'}
                touched={touched.telegram_url}
                errors={errors.telegram_url}
                name="telegram_url"
                label="Telegram URL"
                placeholder="https://www.telegram.com/channel"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputWithLabel
                value={values.instagram_url}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'instagram_url-input'}
                touched={touched.instagram_url}
                errors={errors.instagram_url}
                name="instagram_url"
                label="Instagram URL"
                placeholder="https://www.instagram.com/khanacademy"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputWithLabel
                value={values.facebook_url}
                type="url"
                handleBlur={handleBlur}
                handleChange={handleChange}
                formId={'facebook_url-input'}
                touched={touched.facebook_url}
                errors={errors.facebook_url}
                name="facebook_url"
                label="Facebook URL"
                placeholder="https://www.facebook.com/khanacademy"
              />
            </Grid>

            <Grid item xs={12}>
              <RichText value={about} setValue={setAbout} />
            </Grid>

            <Grid item xs={12}>
              <FieldArray
                name="photo_assets"
                render={(arrayHelper) => (
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <InputWithLabel
                          value={values.photo_assets[0]}
                          type="url"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          formId={'photo-input' + 0}
                          touched={touched.photo_assets}
                          errors={errors.photo_assets}
                          name={`photo_assets.${0}`}
                          label="Photo URL"
                          placeholder="https://..."
                        />
                      </Grid>

                      <Grid item xs={1} mt={2}>
                        <Button
                          color="success"
                          variant="contained"
                          fullWidth
                          sx={{ mt: '20px', height: '40px' }}
                          onClick={() => arrayHelper.push('')}
                        >
                          <PlusOne />
                        </Button>
                      </Grid>
                    </Grid>
                    {values.photo_assets.map((el, indx) => (
                      <Grid container key={indx} spacing={2}>
                        <Grid item xs={10}>
                          <InputWithLabel
                            value={values.photo_assets[indx + 1]}
                            type="url"
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            formId={'photo-input' + (indx + 1)}
                            touched={touched.photo_assets}
                            errors={errors.photo_assets}
                            name={`photo_assets.${indx + 1}`}
                            label="Photo URL"
                            placeholder="https://..."
                          />
                        </Grid>
                        <Grid item xs={1} mt={4}>
                          <IconButton
                            size="large"
                            color="error"
                            type="button"
                            onClick={() => arrayHelper.remove(indx)}
                          >
                            <Delete />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <FieldArray
                name="video_assets"
                render={(arrayHelper) => (
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <InputWithLabel
                          value={values.video_assets[0]}
                          type="url"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          formId={'video_assets' + 0}
                          touched={touched.video_assets}
                          errors={errors.video_assets}
                          name={`video_assets.${0}`}
                          label="Video URL"
                          placeholder="https://..."
                        />
                      </Grid>

                      <Grid item xs={1} mt={2}>
                        <Button
                          color="success"
                          variant="contained"
                          fullWidth
                          sx={{ mt: '20px', height: '40px' }}
                          onClick={() => arrayHelper.push('')}
                        >
                          <PlusOne />
                        </Button>
                      </Grid>
                    </Grid>
                    {values.video_assets.map((el, indx) => (
                      <Grid container key={indx + 1} spacing={2}>
                        <Grid item xs={10}>
                          <InputWithLabel
                            value={values.video_assets[indx + 1]}
                            type="url"
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            formId={'video_assets' + (indx + 1)}
                            touched={touched.video_assets}
                            errors={errors.video_assets}
                            name={`video_assets.${indx + 1}`}
                            label="Video URL"
                            placeholder="https://..."
                          />
                        </Grid>
                        <Grid item xs={1} mt={4}>
                          <IconButton
                            size="large"
                            color="error"
                            type="button"
                            onClick={() => arrayHelper.remove(indx)}
                          >
                            <Delete />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default ProviderForm;
