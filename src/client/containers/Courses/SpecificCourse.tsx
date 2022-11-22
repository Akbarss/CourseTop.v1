/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import SpecificCard from '@/client/components/Courses/SpecificCard';
import {
  comments,
  courseCardData,
  preText,
  related,
} from '@/client/components/data/allArray';
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  Divider,
  Paper,
  Chip,
  Rating,
  Avatar,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Course from '@/client/components/Cards/CourseHome/Course';
import Carousel from 'react-material-ui-carousel';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const btnStyle = {
  bgcolor: '#67AAF9',
  minWidth: '200px',
  color: '#fff',
  marginBottom: ' 20px',
  '&:hover': {
    bgcolor: '#568FD0',
  },
};

const paperStyle = {
  display: { md: 'flex', xs: 'none' },
  flexDirection: 'column',
  gridGap: { xs: '20px', md: '30px' },
  marginBottom: '20px',
};

const smallFont = { xs: '11px', md: '14px', lg: '12px' };

const titleBig = { xs: '15px', md: '22px', lg: '30px' };

const middleFont = { xs: '14px', md: '16px', lg: '20px' };

const SpecificCourse = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Container
      maxWidth="lg"
      sx={{ paddingTop: { xs: '20px', md: '60px' }, marginBottom: '50px' }}
    >
      <Grid
        container
        columns={{ xs: 2, md: 3 }}
        marginBottom="20px"
        spacing={{ xs: 0, md: 4 }}
      >
        <Grid item xs={1}>
          <Paper sx={paperStyle}>
            <Box
              display={{ md: 'flex', xs: 'none' }}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="10px"
            >
              <img src="/courses/children.png" alt="" />
              <Button sx={btnStyle}>Записаться</Button>
              <Box
                display="flex"
                flexDirection="column"
                padding="0 20px 20px 20px"
                gap="5px"
                width="100%"
              >
                <Typography>г. Самарканд, Дагбитская</Typography>
                <Divider />
                <Typography>Оффлайн</Typography>
                <Divider />
                <Typography>Английский Язык</Typography>
                <Divider />
                <Typography>Intermediate</Typography>
                <Divider />
                <Typography>3-6 месяцев</Typography>
                <Divider />
                <Typography>400.000 UZS в месяц</Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={paperStyle}>
            <Box
              display="flex"
              flexDirection="column"
              gap="10px"
              padding="20px"
            >
              <Typography variant="h4" color="initial">
                Теги
              </Typography>
              <Box display="flex" gap="10px" flexWrap="wrap">
                {related.map((i) => (
                  <Grid key={i.id}>
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
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: '20px', md: '30px' }}
          >
            <SpecificCard
              title={courseCardData[0].title}
              about={courseCardData[0].about}
              rating={courseCardData[0].rating}
              ratingCount={courseCardData[0].ratingCount}
              reviews={courseCardData[0].reviews}
              id={courseCardData[0].id}
            />

            <Paper
              sx={{
                bgcolor: '#fff',
              }}
            >
              <Box
                gap="10px"
                padding={{ xs: '10px', md: '20px' }}
                display="flex"
                flexDirection="column"
                sx={{
                  transition: 'height ease 0.9s',
                }}
              >
                <Typography fontSize={titleBig} fontWeight="600">
                  Предисловие
                </Typography>
                <Divider />
                <Box style={{ transition: '1s ease' }}>
                  <Typography fontSize={middleFont}>
                    {open ? preText : `${preText.substring(0, 350)}...`}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    bgcolor: '#fff',
                    border: '1px solid #66ACFF',
                    maxWidth: '200px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  endIcon={
                    open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                  }
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {open ? 'Скрыть' : 'Подробнее'}
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Paper
        sx={{
          padding: { xs: '15px', md: '25px' },
        }}
      >
        <Box
          display={{ xs: 'block', md: 'flex' }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="20px"
          zIndex="999"
        >
          <Typography
            textAlign="center"
            fontSize={titleBig}
            lineHeight="50px"
            fontWeight="600"
          >
            Похожие результаты
          </Typography>
          <Box
            display={{ xs: 'none', md: 'flex' }}
            gap={5}
            flexWrap={'wrap'}
            justifyContent="center"
            margin="0 auto"
          >
            <Course />
            <Course />
            <Course />
          </Box>
          <Box
            display={{ xs: 'block', md: 'none' }}
            gap={5}
            flexWrap={'wrap'}
            justifyContent="center"
            margin="0 auto"
            maxWidth={{ xs: '310px', sm: '400px' }}
          >
            <Carousel navButtonsAlwaysInvisible autoPlay={false}>
              <Course />
              <Course />
              <Course />
            </Carousel>
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          marginTop: '20px',
          padding: { xs: '15px', md: '25px' },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          marginBottom="20px"
          gap="20px"
        >
          <Typography fontWeight="600" fontSize={titleBig}>
            Отзывы
          </Typography>
          <Box display="flex" alignItems="center" gap="5px">
            <Rating name="read-only" value={4} readOnly size="large" />
            <Typography fontSize={titleBig} fontWeight="600">
              4.1
            </Typography>
            <Typography fontSize={smallFont}>(488)</Typography>
          </Box>
          <Divider />
          <Box display="flex" gap={{ xs: '10px', md: '20px' }}>
            <Avatar
              src=""
              sx={{
                width: { xs: '40px', md: '65px', lg: '90px' },
                height: { xs: '40px', md: '65px', lg: '90px' },
              }}
            />
            <Box display="flex" flexDirection="column" gap="5px">
              <Rating
                name="simple-controlled"
                value={value}
                size="small"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <TextField
                sx={{ minWidth: { sm: '220px', md: '350px' } }}
                variant="standard"
                placeholder="Оставьте комментарий..."
              />
            </Box>
          </Box>
          {comments.map((i) => (
            <Box key={i.id}>
              <Divider />
              <Box
                display="flex"
                gap={{ xs: '10px', md: '20px' }}
                marginTop="20px"
              >
                <Avatar
                  sx={{
                    width: { xs: '40px', md: '65px', lg: '90px' },
                    height: { xs: '40px', md: '65px', lg: '90px' },
                  }}
                >
                  {i.name.split(' ')[0][0]}
                </Avatar>
                <Box display="flex" flexDirection="column" gap="5px">
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex" gap="10px" alignItems="center">
                      <Typography fontSize={smallFont} fontWeight="600">
                        {i.name}
                      </Typography>

                      <Rating
                        name="read-only"
                        value={i.rating}
                        readOnly
                        size="small"
                      />
                      <Typography fontSize={smallFont} fontWeight="600">
                        {i.rating}
                      </Typography>
                    </Box>
                    <Typography fontSize={smallFont} sx={{ color: '#99ABB6' }}>
                      {i.commented}
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={'10px'}>
                    <Typography fontSize={smallFont}>{i.text}</Typography>
                    <Box display="flex" gap="40px">
                      <Box display="flex" gap="10px" alignItems="center">
                        <img src="/courses/like.svg" />
                        <Typography fontSize={smallFont}>
                          {i.likes_count}
                        </Typography>
                      </Box>
                      <Box display="flex" gap="10px" alignItems="center">
                        <img src="/courses/dislike.svg" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default SpecificCourse;
