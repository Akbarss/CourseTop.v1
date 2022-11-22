/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Checkbox, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface CoursesCardProps {
  title: string;
  about: string;
  rating: string;
  ratingCount: string;
  reviews: string;
  address: string;
  status: string;
  course: string;
  level: string;
  duration: string;
  price: string;
  unit: string;
  slug: string;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const IconCheckboxes = () => {
  return (
    <div>
      <Checkbox
        {...label}
        icon={
          <BookmarkBorderIcon sx={{ fontSize: '35px', color: '#E84142' }} />
        }
        checkedIcon={
          <BookmarkIcon sx={{ fontSize: '35px', color: '#E84142' }} />
        }
        size="medium"
        color="error"
        sx={{ fontSize: '90px', color: 'red' }}
      />
    </div>
  );
};

const smallFont = { xs: '7px', sm: '9px', md: '12px' };
const ratingsFont = { xs: '8px', sm: '9px', md: '11px' };

const CoursesCard: React.FC<CoursesCardProps> = (props) => {
  return (
    <Box>
      <Box
        display="flex"
        border="1px solid #000"
        bgcolor={'#fff'}
        minHeight={{ xs: '100px', md: '200px' }}
      >
        <Link href={`course/${props.slug}`} passHref>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor={'#67AAF9'}
            minWidth={{ xs: '80px', sm: '120px', md: '180px', lg: '190px' }}
            minHeight={{ xs: '50px', md: '200px' }}
            borderRight={'1px solid #000'}
            sx={{ cursor: 'pointer' }}
          >
            <img src="/innovative.svg" alt="" />
          </Box>
        </Link>
        <Box padding={{ md: '20px 20px 0px 10px', xs: '5px' }}>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: '5px', md: '15px' }}
          >
            <Box display="flex" justifyContent="space-between">
              <Box sx={{ cursor: 'pointer' }}>
                <Link href={`course/${props.slug}`} passHref>
                  <Typography
                    fontSize={{ xs: '9px', sm: '15px', lg: '30px' }}
                    fontWeight="700"
                    color="initial"
                    marginTop="10px"
                  >
                    {props.title}
                  </Typography>
                </Link>
              </Box>
              <Box>
                <IconCheckboxes />
              </Box>
            </Box>
            <Box sx={{ cursor: ' pointer' }}>
              <Link href={`course/${props.slug}`} passHref>
                <Typography fontSize={smallFont} marginBottom="20px">
                  {props.about}
                </Typography>
              </Link>
            </Box>

            <Box display="flex" gap={{ xs: '10px', md: '15px' }}>
              <Box display="flex" gap="5px" alignItems="center">
                <Image
                  src={'/courses/star.svg'}
                  alt={''}
                  width={'15px'}
                  height={'15px'}
                />
                <Typography
                  fontSize={ratingsFont}
                  fontWeight="600"
                  color="initial"
                >
                  {props.rating}
                </Typography>
                <Typography fontSize={ratingsFont} color="initial">
                  ({props.ratingCount})
                </Typography>
              </Box>
              <Box display="flex" gap="5px" alignItems="center">
                <Image
                  src={'/courses/reviews.svg'}
                  alt={''}
                  width="15px"
                  height="15px"
                />
                <Typography fontSize={ratingsFont} color="initial">
                  {props.reviews} отзывов
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" />
        <Box padding="10px">
          <Box
            display="flex"
            padding="5px 0 5px 5px"
            justifyContent="space-between"
            gap="2px"
            minWidth={{ xs: '122px', md: '212px' }}
            flexDirection="column"
            height="100%"
            borderLeft="1px solid #BBB"
          >
            <Typography fontSize={smallFont} color="">
              {props.address}
            </Typography>
            <Divider />
            <Typography fontSize={smallFont} color="">
              {props.status}
            </Typography>
            <Divider />
            <Typography fontSize={smallFont} color="">
              {props.course}
            </Typography>
            <Divider />
            <Typography fontSize={smallFont} color="">
              {props.level}
            </Typography>
            <Divider />
            <Typography fontSize={smallFont} color="">
              {props.duration}
            </Typography>
            <Divider />
            <Typography fontSize={smallFont} color="">
              {props.price} {props.unit} в месяц
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesCard;
