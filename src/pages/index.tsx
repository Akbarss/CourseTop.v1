import Layout from '@/client/components/Layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Women from '../../public/image/index/womens.svg';
import { PopularCourses, SearchBlock } from '@/client/sections/@landing/home';
import {
  Grow,
  Container,
  Box,
  Stack,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import Example from '@/client/sections/@landing/home/SliderHomePage';
import Course from '@/client/components/Cards/CourseHome/Course';
import SwiperCard from '@/client/components/Cards/CourseHome/mobile/SwiperCard';
import ListCenter from '@/client/components/Cards/ListCenter/ListCenter';
import WorkCards from '@/client/components/Cards/HowWorkCard/WorkCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box bgcolor={'#FFFFFF'} pt="65px" height={'9900%'}>
          <Box mt={{ xs: 8, sm: 9, md: -1, }}>
            <Container maxWidth="lg">
              <Stack
                direction="row"
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={{ sm: 'center', md: 'flex-start' }}
                gap={5}
              >
                <Box component={Image} src={Women} sx={{ width: 9 }} />
                <Box display={'flex'} flexDirection="column">
                  <SearchBlock />
                  <Box mt={3.5}>
                    <PopularCourses />
                  </Box>
                </Box>
              </Stack>
            </Container>
            {/* Carusel Home */}
            <Box mt={5}>
              <Example />
            </Box>
            {/* Course Blue Block */}
            <Box>
              <Box bgcolor={'#67AAF9'} height="auto" mt={-3} p={1}>
                <Box
                  display={'flex'}
                  gap="10px"
                  justifyContent={'center'}
                  pt={{ xs: '20px', sm: '50px', md: '63px' }}
                >
                  <Box textAlign={'center'}>
                    <Typography
                      fontSize={{
                        xs: '24px',
                        sm: '37px',
                        md: '46px',
                        lg: '48px',
                      }}
                      fontWeight={700}
                      color={'#fff'}
                      lineHeight="105%"
                    >
                      Что Вы хотите изучить?
                    </Typography>
                    <Typography
                      fontSize={{
                        XS: '18px',
                        sm: '24px',
                        md: '29px',
                        lg: '30px',
                      }}
                      fontWeight={400}
                      color={'#fff'}
                    >
                      Уроки с высоким рейтингом.
                    </Typography>
                  </Box>
                </Box>
                {/* Cards */}
                <Box mt={3.7} mb={9}>
                  <Box
                    display={{ xs: 'none', sm: 'flex' }}
                    gap={5}
                    flexWrap={'wrap'}
                    justifyContent="center"
                  >
                    <Course />
                    <Course />
                    <Course />
                  </Box>
                  <Box display={{ xs: 'block', sm: 'none' }}>
                    <Grid justifyContent={'center'}>
                      <SwiperCard />
                    </Grid>
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent="center"
                  mt={{ xs: -8, sm: -3 }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      zIndex: 6,
                      color: '#06314D',
                      backgroundColor: 'rgba(255, 255, 255, 0.89)',
                      border: '1px solid #06314D',
                      height: '43px',
                    }}
                  >
                    Посмотреть все курсы
                  </Button>
                </Box>
              </Box>
              <Box
                position={'relative'}
                top={{ xs: '-20px', md: '-100px', lg: '-160px' }}
                zIndex={1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#67AAF9"
                    d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,218.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                  />
                </svg>
              </Box>
            </Box>
            {/* List of the best scientific centers */}
            <Container
              maxWidth="lg"
              sx={{ marginTop: { xs: '-24px', md: '-50px', lg: '-170px' } }}
            >
              <Box>
                <Typography
                  fontSize={{
                    xs: '18px',
                    sm: '37px',
                    md: '46px',
                    lg: '46px',
                  }}
                  fontWeight={700}
                  textAlign="center"
                  lineHeight={'128%'}
                >
                  Список лучших учебных центров по всему Узбекистану
                </Typography>
                <Typography
                  variant="h4"
                  textAlign="center"
                  pt={2}
                  color=" rgba(6, 49, 77, 0.66)"
                  fontWeight={500}
                >
                  Здесь вы можете посмотреть список самых квалифицированных
                  центров
                </Typography>
              </Box>
              <Box display={'flex'} justifyContent="space-around" mt={6.7}>
                <ListCenter />
              </Box>
            </Container>
            {/* Footer top Block */}
            <Box
              bgcolor={' rgba(103, 170, 249, 0.37)'}
              height="auto"
              pt={8}
              pb={10}
            >
              <Box
                display={'flex'}
                flexDirection="column"
                alignItems={'center'}
                gap="9px"
                textAlign={'center'}
              >
                <Typography variant="h2">Как это работает?</Typography>
                <Typography
                  variant="h6"
                  color={'rgba(6, 49, 77, 0.71)'}
                  textAlign={'center'}
                >
                  Мы предоставляем широкий выбор учебныйх
                  <br /> центров с разными рейтингами и видом обучения.
                </Typography>
              </Box>
              {/* Cards */}
              <Box mt={9}>
                <WorkCards />
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
