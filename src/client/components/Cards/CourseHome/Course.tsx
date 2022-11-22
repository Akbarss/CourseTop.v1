import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import course from '../../../../../public/image/Course/course.jpg';
import logo from '../../../../../public/image/Course/logoCenter.svg';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';

const label2 = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StartCheckboxes = () => {
  return (
    <div>
      <Checkbox
        {...label2}
        icon={<StarIcon sx={{ fontSize: '35px', color: '#FAEA5A' }} />}
        checkedIcon={<StarIcon sx={{ fontSize: '35px', color: '#FAEA5A' }} />}
        size="medium"
        color="primary"
        sx={{ fontSize: '90px', color: '#FAEA5A' }}
      />
    </div>
  );
};

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

const Course = () => {
  return (
    <Box
      width={{ xs: '310px', sm: '400px', md: '380px' }}
      height="518px"
      border={'1px solid #000000'}
      bgcolor="#FFFFFF"
      sx={{
        transition: 'all 450ms',
        '&:hover': {
          transform: 'translateY(-11px)',
          boxShadow:
            ' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
          opacity: '1',
        },
      }}
      zIndex={6}
    >
      <Box>
        <Image src={course} alt="img" height={520} objectFit="cover" />
      </Box>
      <Box mt={0.67}>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Image src={logo} alt="logo" width={217} objectFit="cover" />
          </Box>
          <Box color={'red'}>
            <Tooltip title="Save Course" placement="top-start">
              <IconCheckboxes />
            </Tooltip>
          </Box>
        </Stack>
        <Stack flexDirection={'column'} pl="19px" mt={-2}>
          <Typography variant="h4">Frontend разработка</Typography>
          <Typography variant="subtitle1">
            Рыбатекст используется дизайнерами, проектировщиками и
            фронтендерами, когда нужно быстро заполнить макеты или прототипы
            содержимым.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Box display={'flex'} alignItems={'center'}>
            <StartCheckboxes />
            <Box display={'flex'} gap="10px" pt={0.3}>
              <Typography variant="body1" fontWeight={700}>
                4.8
              </Typography>
              <Typography variant="body1">(237)</Typography>
            </Box>
          </Box>
          <Box display={'flex'} alignItems="center" pt={1} mr="13px">
            <Box>
              <LocationOnIcon style={{ color: '#67AAF9' }} />
            </Box>
            <Typography variant="body1" fontWeight={700}>
              Самарканд
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Course;
