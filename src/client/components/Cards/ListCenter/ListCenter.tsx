/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { listCenter } from '../../data/allArray';
import ListItemButton from '@mui/material/ListItemButton';
import { Stack } from '@mui/system';
import line from '../../../../../public/image/CenterLogo/Line.svg';
import Image from 'next/image';

const ListCenter = () => {
  return (
    <Stack>
      <Box display={'flex'} gap={6}>
        <Stack flexDirection={'column'}>
          {listCenter.map((i) => (
            <Stack flexDirection={'column'} gap={90} key={i._id}>
              <ListItemButton
                sx={{ maxHeight: 127, pl: 2, borderRadius: '15px' }}
              >
                <Stack gap={1.9} direction="row" alignItems={'center'}>
                  <img
                    src={i.img}
                    style={{
                      width: '110px',
                      height: '137px',
                      objectFit: 'contain',
                    }}
                    alt=""
                  />
                  <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                    <Typography variant="subtitle1">{i.title}</Typography>
                  </Box>
                </Stack>
              </ListItemButton>
            </Stack>
          ))}
        </Stack>
        <Box display={'flex'} alignItems="center">
          <Image src={line} alt="line" width={10} height={590} layout="fixed" />
        </Box>
        <Stack flexDirection={'column'}>
          {listCenter.map((i) => (
            <Stack flexDirection={'column'} gap={90} key={i._id}>
              <ListItemButton
                sx={{ maxHeight: 127, pl: 2, borderRadius: '15px' }}
              >
                <Stack gap={1.9} direction="row" alignItems={'center'}>
                  <img
                    src={i.img}
                    style={{
                      width: '120px',
                      height: '137px',
                      objectFit: 'contain',
                    }}
                  />
                  <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                    <Typography variant="subtitle1">{i.title}</Typography>
                  </Box>
                </Stack>
              </ListItemButton>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box display={'flex'} justifyContent="center" mt={2} mb="70px">
        <Button
          variant="outlined"
          style={{
            zIndex: 6,
            color: '#06314D',
            border: '1px solid #06314D',
            height: '43px',
            width: '180px',
          }}
        >
          Посмотреть
        </Button>
      </Box>
    </Stack>
  );
};

export default ListCenter;
