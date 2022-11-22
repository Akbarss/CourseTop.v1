import Layout from '@/client/components/Layout/Layout';
import React from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Stack, Avatar } from '@mui/material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const RouteBlog = () => {
  return (
    <>
      <Head>
        <title>Блог | Route</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box bgcolor={'#fff'} height={'auto'} pb={5}>
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 4.5, sm: 2 }}
              justifyContent={'space-between'}
              p={{ xs: '70px 2.5vw', sm: '90px 2.5vw' }}
            >
              <Stack direction={'column'} spacing={2}>
                <Typography variant="h3">
                  5 самых высокооплачиваемых вакансий в 2022 году для получения
                  пассивного дохода.
                </Typography>
                <Typography variant="h4" color="rgba(6, 49, 77, 0.41)">
                  Рыбатекст используется дизайнерами, проектировщиками и
                  фронтендерами, когда нужно быстро заполнить макеты или
                  прототипы содержимым.
                </Typography>
                <Box>
                  <Stack direction={'row'} gap={{ xs: 2.7, sm: 6.5 }} mt={3}>
                    <Box display={'flex'} gap={1.2} alignItems="center">
                      <HistoryToggleOffIcon
                        sx={{ color: 'rgba(6, 49, 77, 0.59)', fontSize: 30 }}
                      />
                      <Typography
                        variant="subtitle1"
                        color={'rgba(6, 49, 77, 0.59)'}
                      >
                        5 мин.
                      </Typography>
                    </Box>
                    <Box display={'flex'} gap={1.2} alignItems="center">
                      <CalendarMonthIcon
                        sx={{ color: 'rgba(6, 49, 77, 0.59)', fontSize: 30 }}
                      />
                      <Typography
                        variant="subtitle1"
                        color={'rgba(6, 49, 77, 0.59)'}
                      >
                        23 июня 2022 года
                      </Typography>
                    </Box>
                  </Stack>
                  <Box
                    component={'img'}
                    src={
                      'https://cdn.sanity.io/images/dktu0a78/production/eed920ecc5c02389303d6090783ffc7c7b896afe-4468x3792.jpg?w=1000&h=1000&fit=max'
                    }
                    width="100%"
                    mt={2}
                    alt=""
                  />
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={5} pt={4}>
                  <Typography variant="h4">
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты или
                    прототипы содержимым.
                  </Typography>
                  <Typography variant="h5" color="#06314D" fontWeight={400}>
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты или
                    прототипы содержимым. Рыбатекст используется дизайнерами,
                    проектировщиками и фронтендерами, когда нужно быстро
                    заполнить макеты или прототипы содержимым. Рыбатекст
                    используется дизайнерами, проектировщиками и фронтендерами,
                    когда нужно быстро заполнить макеты или прототипы
                    содержимым. Рыбатекст используется дизайнерами,
                    проектировщиками и фронтендерами, когда нужно быстро
                    заполнить макеты или прототипы содержимым. Рыбатекст
                    используется дизайнерами, проектировщиками и фронтендерами,
                    когда нужно быстро заполнить макеты или прототипы
                    содержимым.
                  </Typography>
                  <Typography variant="h5" color="#06314D" fontWeight={400}>
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты или
                    прототипы содержимым. Рыбатекст используется дизайнерами,
                    проектировщиками и фронтендерами, когда нужно быстро
                    заполнить макеты или прототипы содержимым. Рыбатекст
                    используется дизайнерами, проектировщиками и фронтендерами,
                    когда нужно быстро заполнить макеты или прототипы
                    содержимым. Рыбатекст используется дизайнерами,
                    проектировщиками и фронтендерами, когда нужно быстро
                    заполнить макеты или прототипы содержимым. Рыбатекст
                    используется дизайнерами, проектировщиками и фронтендерами,
                    когда нужно быстро заполнить макеты или прототипы
                    содержимым.
                  </Typography>
                </Box>
              </Stack>
              {/* Right */}
              <Stack
                direction={'column'}
                gap={0.78}
                alignItems={{ xs: 'center' }}
              >
                <Avatar
                  src="user"
                  alt=""
                  sx={{ width: 98, height: 98, marginLeft: 0.45 }}
                />
                <Typography variant="subtitle2" textAlign={'center'}>
                  Мухаммад Собиров
                </Typography>
                <Typography
                  variant="subtitle2"
                  textAlign={'center'}
                  color="rgba(6, 49, 77, 0.41)"
                >
                  CTO
                </Typography>
                <Box
                  component={'hr'}
                  border="1px solid rgba(0, 0, 0, 0.18)"
                  width="155px"
                  height={0}
                />
                <Typography variant="subtitle2" textAlign={'center'}>
                  Поделиться
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  gap={{ xs: '10px', md: '10px' }}
                >
                  <a href={'/'}>
                    <Box width={20} height={20}>
                      <img src={'/contact/telegram.svg'} alt="" />
                    </Box>
                  </a>

                  <a href={'/'}>
                    <Box
                      width={20}
                      height={20}
                      marginLeft={{ xs: '5px', md: '15px' }}
                    >
                      <img src={'/contact/instagram.svg'} alt="" />
                    </Box>
                  </a>

                  <a href={'/'}>
                    <Box width={20} height={20}>
                      <img src={'/contact//facebook.svg'} alt="" />
                    </Box>
                  </a>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default RouteBlog;
