import { Container, Box } from '@mui/system';
import Logo from '../../../../public/logo2.svg';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FooterMenu, FooterServis } from '../data/allArray';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Box
        bgcolor="#fff"
        height="auto"
        borderTop={'1px solid  rgba(0, 0, 0, 0.2)'}
      >
        <Container maxWidth={'md'}>
          <Stack direction={'row'} p={5} gap={{ xs: 2, sm: 10 }}>
            <Stack direction={'column'} gap={1}>
              <Image
                src={Logo}
                alt=""
                width={150}
                height={150}
                objectFit="contain"
              />
              <Typography variant="subtitle2" textAlign={'center'}>
                Copyright © 2022 Coursetop
                <br /> All rights reserved
              </Typography>
            </Stack>
            <Box display={'flex'} gap={10} flexWrap={'wrap'} p={'30px 15px'}>
              <Stack direction={'column'} gap={1}>
                <Typography variant="subtitle1">Меню</Typography>
                <Box display={'flex'} flexDirection="column" gap={2}>
                  {FooterMenu.map((i) => (
                    <Link href={i.link} key={i.id}>
                      <Typography
                        variant="subtitle1"
                        color="#0E2944"
                        fontWeight={400}
                        sx={{
                          cursor: 'pointer',
                          transition: 'all 300ms',
                          '&:hover': { color: '#E84142' },
                        }}
                      >
                        {i.text}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Stack>
              <Stack direction={'column'} gap={1}>
                <Typography variant="subtitle1">Сервисы</Typography>
                <Box display={'flex'} flexDirection="column" gap={2}>
                  {FooterServis.map((i) => (
                    <Link href={i.link} key={i.id}>
                      <Typography
                        variant="subtitle1"
                        color="#0E2944"
                        fontWeight={400}
                        sx={{
                          cursor: 'pointer',
                          transition: 'all 300ms',
                          '&:hover': { color: '#E84142' },
                        }}
                      >
                        {i.text}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Stack>

              <Stack direction={'column'} gap={1}>
                <Typography variant="subtitle1">Контакты</Typography>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color="#0E2944"
                    fontWeight={400}
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 300ms',
                      '&:hover': { color: '#E84142' },
                    }}
                  >
                    (+998) 522-91-51
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}
