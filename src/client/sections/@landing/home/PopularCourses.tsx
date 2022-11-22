import React from 'react';
import { Box, Typography } from '@mui/material';
import { coursesPop, coursesPop2 } from '@/client/components/data/allArray';
import Chip from '@mui/material/Chip';

const PopularCourses = () => {
  return (
    <Box display={'flex'} flexDirection="column" gap={1.5}>
      <Typography variant="h4">Популярные курсы</Typography>
      <Box display={'flex'} flexDirection="column" gap={2}>
        <Box display={'flex'} gap="15px" flexWrap={'wrap'}>
          {coursesPop.map((i) => (
            <Box key={i._id}>
              <Chip
                label={i.name}
                component="a"
                href="#chip"
                variant="outlined"
                clickable
                sx={{ p: 0.9 }}
              />
            </Box>
          ))}
        </Box>
        {/* Column 2 */}
        <Box display={'flex'} gap="15px" flexWrap={'wrap'}>
          {coursesPop2.map((i) => (
            <Box key={i._id}>
              <Chip
                label={i.name}
                component="a"
                href="#chip"
                variant="outlined"
                clickable
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularCourses;
