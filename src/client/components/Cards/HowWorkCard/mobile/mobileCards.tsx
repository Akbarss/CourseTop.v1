import {
  MobileCard1,
  MobileCard2,
  MobileCard3,
} from '@/client/components/data/allArray';
import { Box, Stack, Typography, Divider } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const MobileCards = () => {
  return (
    <>
      <Box
        display={{ xs: 'flex', sm: 'none' }}
        mt="-5px"
        boxShadow={'0px 1px 11px 2px rgba(0, 0, 0, 0.25);'}
      >
        <Box width={'150px'} height="auto" bgcolor={'#fff'}>
          <Stack
            direction={'row'}
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            {MobileCard1.map((i) => (
              <Box key={i.id} display={'flex'} flexDirection="column" gap={1.5}>
                <Typography variant="body2" textAlign={'center'}>
                  {i.title}
                </Typography>
                <Box display={'flex'} justifyContent="center">
                  <Image src={i.img} width={'70px'} height={'80px'} alt="" />
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
        <Divider orientation="vertical" />
        <Box width={'150px'} height="auto" bgcolor={'#fff'}>
          <Stack
            direction={'row'}
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            {MobileCard2.map((i) => (
              <Box key={i.id} display={'flex'} flexDirection="column" gap={1.5}>
                <Typography variant="body2" textAlign={'center'}>
                  {i.title}
                </Typography>
                <Box display={'flex'} justifyContent="center">
                  <Image src={i.img} width={'70px'} height={'80px'} alt="" />
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
      <Box
        display={{ xs: 'flex', sm: 'none' }}
        mt="-5px"
        boxShadow={'0px 1px 11px 2px rgba(0, 0, 0, 0.25);'}
      >
        <Box width={'150px'} height="auto" bgcolor={'#fff'}>
          <Stack
            direction={'row'}
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            {MobileCard3.map((i) => (
              <Box key={i.id} display={'flex'} flexDirection="column" gap={1.5}>
                <Typography variant="body2" textAlign={'center'}>
                  {i.title}
                </Typography>
                <Box display={'flex'} justifyContent="center">
                  <Image src={i.img} width={'70px'} height={'80px'} alt="" />
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider orientation="vertical" />
        <Box width={'150px'} height="auto" bgcolor={'#67AAF9'}>
          <Box display={'flex'} flexDirection="column" gap={1.5} p={2}>
            <Typography variant="body2" color={'#fff'} textAlign="center">
              Сервис
            </Typography>
            <Typography fontSize={'12px'} fontWeight={600} color={'#fff'}>
              Мы собрали все учебные центры и курсы в Вашем городе с целью
              облегчить Вам поиск
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileCards;
