/* eslint-disable @next/next/no-img-element */
import { Box, Checkbox, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface SpecificCardProps {
  title: string;
  about: string;
  rating: string;
  ratingCount: string;
  reviews: string;
  id: string;
}

const smallFont = { xs: '7px', sm: '9px', md: '12px' };
const ratingsFont = { xs: '8px', sm: '9px', md: '11px' };

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

const SpecificCard: React.FC<SpecificCardProps> = (props) => {
  return (
    <Box
      display="flex"
      border="1px solid #000"
      bgcolor={'#fff'}
      minHeight={{ xs: '100px', md: '200px' }}
      maxWidth="952px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor={'#67AAF9'}
        minWidth={{ xs: '80px', sm: '120px', md: '180px', lg: '190px' }}
        minHeight={{ xs: '50px', md: '200px' }}
        borderRight={'1px solid #000'}
      >
        <img src="/innovative.svg" alt="" />
      </Box>
      <Box padding={{ md: '20px 20px 0px 10px', xs: '5px' }}>
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: '5px', md: '15px' }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              fontSize={{ xs: '9px', sm: '15px', lg: '30px' }}
              fontWeight="700"
              color="initial"
              marginTop="10px"
            >
              {props.title}
            </Typography>
            <Box>
              <IconCheckboxes />
            </Box>
          </Box>
          <Typography fontSize={smallFont} marginBottom="20px">
            {props.about}
          </Typography>
          <Box display="flex" justifyContent="space-between">
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
      </Box>
    </Box>
  );
};

export default SpecificCard;
