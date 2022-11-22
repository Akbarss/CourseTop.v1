import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import CourseHeading from '@/client/components/Courses/CourseHeading';
import { courseCardData, related } from '@/client/components/data/allArray';
import CourseFilter, {
  MobileFilter,
} from '@/client/components/Courses/CourseFilter';
import CoursesCard from '@/client/components/Courses/CoursesCard';

const smallFont = { xs: '11px', md: '14px', lg: '18px' };

const CoursesContainer = ({ data }: any) => {
  console.log(data);

  return (
    <>
      <Divider />
      <Box
        padding={{ xs: '30px 25px', md: '50px 40px', lg: '35px 140px' }}
        display="flex"
        flexDirection="column"
        bgcolor="#fff"
        boxShadow="0px 1px 0px 0px rgba(0, 0, 0, 0.25)"
      >
        <CourseHeading subject={'English'} subcategory={'IELTS'} count={122} />
        <Typography
          variant="h2"
          color="initial"
          marginTop={{ xs: '20px', md: '50px' }}
        >
          IELTS курсы
        </Typography>
        <Typography
          variant="body1"
          maxWidth={{ xs: '100%', md: '50%' }}
          color="initial"
        >
          Рыбатекст используется дизайнерами, проектировщиками и фронтендерами,
          когда нужно быстро заполнить макеты или прототипы содержимым.
        </Typography>
        <Button
          sx={{
            width: '200px',
            bgcolor: '#E84142',
            color: '#fff',
            marginTop: '20px',
            '&:hover': {
              bgcolor: '#FF6364',
            },
          }}
        >
          Подписаться
          <Typography
            sx={{ color: '#06314D' }}
            variant="subtitle1"
            marginLeft="10px"
          >
            56
          </Typography>
        </Button>
      </Box>
      <Container maxWidth="lg" sx={{ paddingBottom: '50px' }}>
        <Box minHeight="500px" marginTop={{ xs: '20px', md: '40px' }}>
          <Typography variant="h3" marginBottom="13px" color="initial">
            Похожие запросы
          </Typography>
          <Box
            bgcolor="#fff"
            display="flex"
            padding="20px"
            flexWrap="wrap"
            gap={{ xs: '25px', md: '35px' }}
            marginBottom={{ xs: '20px', md: '40px' }}
            border="1px solid #E6E6E6"
          >
            <Grid container columns={12} spacing={{ md: 3, xs: 1 }}>
              {related.map((i) => (
                <Grid item xs={3} key={i.id}>
                  <Chip
                    label={i.title}
                    component="a"
                    variant="outlined"
                    clickable
                    sx={{
                      p: 0.9,
                      bgcolor: '#fff',
                      fontSize: smallFont,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box display="flex" gap="20px" marginTop={{ xs: '20px', md: '40px' }}>
            <CourseFilter filter={false} />
            <Box width="100%">
              <Box
                display="flex"
                justifyContent="space-between"
                gap={{ xs: '10px', md: '20px' }}
              >
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', md: 'row' }}
                  gap="10px"
                >
                  <MobileFilter />
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={{ xs: '10px', md: '20px' }}
                marginTop={{ xs: '10px', md: '0px' }}
                alignItems="center"
              >
                {courseCardData.map((i) => (
                  <Box key={i.id}>
                    <CoursesCard
                      title={i.title}
                      about={i.about}
                      rating={i.rating}
                      ratingCount={i.ratingCount}
                      reviews={i.reviews}
                      address={i.address}
                      status={i.status}
                      course={i.course}
                      level={i.level}
                      duration={i.duration}
                      price={i.price}
                      unit={i.unit}
                      slug={i.id}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CoursesContainer;
