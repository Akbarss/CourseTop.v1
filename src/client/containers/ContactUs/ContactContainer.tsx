/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const iconsWidth = { lg: '62px', md: '40px', xs: '17px' };
const iconsHeight = { lg: '51px', md: '30px', xs: '14px' };
const btnStyle = {
  border: '1px solid #67AAF9',
  minWidth: '95px',
  fontSize: { xs: '8px', md: '15px', lg: '24px' },
  fontWeight: '500',
  padding: { xs: '5px 15px', md: '8px 24px', lg: '8px 36px' },
};

const ContactContainer = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: '50px' }}>
      <Box display="flex" bgcolor={{ xs: '#fff', md: '#F5F5F5' }}>
        <Box width="50%" height="100%">
          <img src={'/contact/businessman.svg'} alt="" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          width="50%"
          gap={{ xs: '10px', md: '20px' }}
        >
          <Typography
            fontSize={{ xs: '14px', sm: '17px', md: '26px', lg: '48px' }}
            fontWeight="600"
            color="initial"
          >
            Cвяжитесь с нами{' '}
          </Typography>
          <Typography
            fontSize={{ xs: '10px', sm: '15px', md: '20px', lg: '32px' }}
            color="initial"
          >
            Если у вас есть вопросы или предложения, вы можете связаться с нами,
            и мы вам ответим в скором времени.{' '}
          </Typography>
          <Button sx={btnStyle} variant="text">
            Оставить заявку
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: '10px', md: '20px' }}
          >
            <a href={'/'}>
              <Box width={iconsWidth} height={iconsHeight}>
                <img src={'/contact/telegram.svg'} alt="" />
              </Box>
            </a>

            <a href={'/'}>
              <Box
                width={iconsWidth}
                height={iconsHeight}
                marginLeft={{ xs: '5px', md: '15px' }}
              >
                <img src={'/contact/instagram.svg'} alt="" />
              </Box>
            </a>

            <a href={'/'}>
              <Box width={iconsWidth} height={iconsHeight}>
                <img src={'/contact//facebook.svg'} alt="" />
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactContainer;
