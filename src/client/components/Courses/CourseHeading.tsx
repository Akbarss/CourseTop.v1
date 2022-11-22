import { Box, Typography } from '@mui/material';
import React from 'react';

interface HeadingProps {
  subject: string;
  subcategory: string;
  count: number;
}

const CourseHeading: React.FC<HeadingProps> = (props) => {
  const lastDigit = props.count % 10;
  const ends = [2, 3, 4];
  const noEnd = [11, 12, 13, 14];

  return (
    <>
      <Box display="flex" gap={{ xs: '10px', md: '20px' }}>
        <Typography sx={{ color: 'gray' }} variant="body2">
          Курсы
        </Typography>
        <Typography sx={{ color: 'gray' }} variant="body2">
          /
        </Typography>
        <Typography sx={{ color: 'gray' }} variant="body2">
          {props.subject}
        </Typography>
        <Typography sx={{ color: 'gray' }} variant="body2">
          /
        </Typography>
        <Typography sx={{ color: '#06314D' }} variant="body2">
          {props.subcategory}
        </Typography>

        <Typography sx={{ color: '#06314D' }} variant="body2">
          ({props.count} результат
          {noEnd.includes(props.count)
            ? 'ов'
            : ends.includes(lastDigit)
            ? 'а'
            : lastDigit == 1
            ? ''
            : 'ов'}
          )
        </Typography>
      </Box>
    </>
  );
};

export default CourseHeading;
