import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';

const items = [
  {
    id: '1',
    name: 'FAST education',
    description: '3 oy qatnab universitetga kir',
    img: 'https://s3-alpha-sig.figma.com/img/5530/abc6/032b3f90bc9c6660c5658bf924272bfe?Expires=1666569600&Signature=JVs1BrovTkLsSRLoivlf-j-Qljm78csX5r0toT6uLMeX5lzcHzLp7WIZQye8hXloPylCPhXm8n5i0cgG0Oxk3kXKJD6m7NiVlmDtw-LXREO7glM0ZGuAk4PAeJYA28IU7qt8STUNi2CHBjfmyMbBUJ4JKFdees7LzbuGgmEVQa~z00uUuMsiAy-TAmQFpRChzFXCpbX1hcUyUv0N~jjONmJrOn9g500ql8MyrKyNwS0keZNiT4C7SY3GvPv-NCBV-Xaf59qy21yufvJODX~Z0X8Cs1Sd3jjxE5f2kJ6dbrdtdCAHM2rHUI7HN0abvBNEQEkhYum6RsDUYG83bN6MXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: '2',
    name: 'innovation center',
    description: '19 oy Developer',
    img: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624__340.jpg',
  },
  {
    id: '3',
    name: 'Random Name',
    description: 'Backend Developer',
  },
  {
    id: '4',
    name: 'Random Name ',
    description: '',
  },
];

function Example() {
  return (
    <Carousel autoPlay={false}>
      {items.map((item) => (
        <Box key={item.id}>
          <Box
            height="300px"
            bgcolor="#0E2944"
            position={'relative'}
            top="10px"
          >
            <Box
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: 300,
                backgroundPosition: 'center',
                backgroundClip: 'content-box',
                opacity: 1,
              }}
            >
              <Box p={3}>
                <Box>
                  <Typography variant="h3" color={'#FAFCFE'} width={'130px'}>
                    {item.name}
                  </Typography>
                </Box>
                <Box mt={{ xs: 5, sm: 3, md: 2 }}>
                  <Typography
                    fontSize={{
                      xs: '29px',
                      sm: '48px',
                      md: '50px',
                      lg: '52px',
                    }}
                    fontWeight={600}
                    color={'#FAFCFE'}
                    textAlign="center"
                    mb={1}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
}

export default Example;
