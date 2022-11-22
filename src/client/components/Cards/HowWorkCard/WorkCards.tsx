import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import lineTop from '../../../../../public/Icon/2.svg';
import Image from 'next/image';
import { Stack } from '@mui/system';
import { HowWork, HowWork2, HowWork3 } from '../../data/allArray';
import MobileCards from './mobile/mobileCards';
import line from '../../../../../public/Icon/line.svg';

const WorkCards = () => {
  return (
    <>
      <Box display={'flex'} flexDirection="column" alignItems="center">
        <Box>
          <Image src={lineTop} alt="line" />
        </Box>
        <Box
          display={'flex'}
          gap={{ xs: '51px', sm: '130px', smP: '190px', md: '210px' }}
          zIndex="4"
        >
          <Box
            width={{ xs: '40px', sm: '50px', md: '60px' }}
            height={{ xs: '40px', sm: '50px', md: '60px' }}
            bgcolor={'#67AAF9'}
            borderRadius={'100%'}
            position="relative"
            left={15}
          >
            <Typography
              variant="h3"
              textAlign={'center'}
              color="#fff"
              mt={'2px'}
            >
              1
            </Typography>
          </Box>
          <Box
            width={{ xs: '40px', sm: '50px', md: '60px' }}
            height={{ xs: '40px', sm: '50px', md: '60px' }}
            bgcolor={'#67AAF9'}
            borderRadius={'100%'}
          >
            <Typography
              variant="h3"
              textAlign={'center'}
              color="#fff"
              mt={'2px'}
            >
              2
            </Typography>
          </Box>
          <Box
            width={{ xs: '40px', sm: '50px', md: '60px' }}
            height={{ xs: '40px', sm: '50px', md: '60px' }}
            bgcolor={'#67AAF9'}
            borderRadius={'100%'}
          >
            <Typography
              variant="h3"
              textAlign={'center'}
              color="#fff"
              mt={'2px'}
            >
              3
            </Typography>
          </Box>
          <Box
            width={{ xs: '40px', sm: '50px', md: '60px' }}
            height={{ xs: '40px', sm: '50px', md: '60px' }}
            bgcolor={'#fff'}
            borderRadius={'100%'}
            mr="20px"
          >
            <Typography
              variant="h3"
              textAlign={'center'}
              color="#67AAF9"
              mt={'2px'}
            >
              4
            </Typography>
          </Box>
        </Box>
        <Stack direction={'row'} justifyContent="center">
          <Box
            display={{ xs: 'none', xsP: 'none', sm: 'flex' }}
            mt="-35px"
            boxShadow={'0px 1px 11px 2px rgba(0, 0, 0, 0.25);'}
          >
            <Box
              width={{ xs: '130px', sm: '170px', md: '250px' }}
              height="auto"
              bgcolor={'#fff'}
            >
              <Stack
                direction={'row'}
                justifyContent="center"
                alignItems="center"
                pt={6.7}
              >
                {HowWork.map((i) => (
                  <Box
                    key={i.id}
                    display={'flex'}
                    flexDirection="column"
                    gap={1.5}
                  >
                    <Typography variant="h5">{i.title}</Typography>
                    <Box display={'flex'} justifyContent="center">
                      <Image
                        src={i.img}
                        width={'121px'}
                        height={'121px'}
                        alt=""
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Divider orientation="vertical" />
            <Box
              width={{ xs: '130px', sm: '170px', smP: '210px', md: '250px' }}
              height="233px"
              bgcolor={'#fff'}
            >
              <Stack
                direction={'row'}
                justifyContent="center"
                alignItems="center"
                pt={6.7}
              >
                {HowWork2.map((i) => (
                  <Box
                    key={i.id}
                    display={'flex'}
                    flexDirection="column"
                    gap={1.5}
                  >
                    <Typography variant="h5" textAlign={'center'}>
                      {i.title}
                    </Typography>
                    <Box display={'flex'} justifyContent="center">
                      <Image
                        src={i.img}
                        width={'121px'}
                        height={'121px'}
                        alt=""
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Divider orientation="vertical" />
            <Box
              width={{ xs: '130px', sm: '170px', smP: '210px', md: '250px' }}
              height="233px"
              bgcolor={'#fff'}
            >
              <Stack
                direction={'row'}
                justifyContent="center"
                alignItems="center"
                pt={6.7}
              >
                {HowWork3.map((i) => (
                  <Box
                    key={i.id}
                    display={'flex'}
                    flexDirection="column"
                    gap={1.5}
                  >
                    <Typography variant="h5">{i.title}</Typography>
                    <Box display={'flex'} justifyContent="center">
                      <Image
                        src={i.img}
                        width={'121px'}
                        height={'121px'}
                        alt=""
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box
              width={{ xs: '130px', sm: '170px', smP: '210px', md: '250px' }}
              height="233px"
              bgcolor={'#67AAF9'}
            >
              <Stack
                direction={'row'}
                justifyContent="center"
                alignItems="center"
                pt={6.7}
              >
                <Box
                  display={'flex'}
                  flexDirection="column"
                  alignItems={'center'}
                  gap={1.5}
                >
                  <Typography variant="h5" color={'#fff'}>
                    Сервис
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={'#fff'}
                    textAlign="center"
                  >
                    Мы собрали все учебные центры и курсы в Вашем городе с целью
                    облегчить Вам поиск.{' '}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* Mobile */}
          <Box>
            <MobileCards />
          </Box>
        </Stack>
      </Box>
      <Box>
        <Box
          position={'relative'}
          right={270}
          display={{ xs: 'none', sm: 'flex' }}
          justifyContent="center"
        >
          <Image src={line} alt="" />
        </Box>
        <Box display={'flex'} justifyContent="center" mt={{ xs: 5, sm: -3.5 }}>
          <Button
            variant="outlined"
            style={{
              zIndex: 6,
              color: '#06314D',
              backgroundColor: 'rgba(255, 255, 255, 0.89)',
              border: '1px solid #06314D',
              height: '43px',
            }}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WorkCards;
