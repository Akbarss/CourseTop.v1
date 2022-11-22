/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  styled,
  Card,
} from '@mui/material';
import { Stack } from '@mui/system';
import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEventHandler, useEffect, useState } from 'react';
import Logo from '../../../shared/components/Logo';
import useResponsive from '../../../shared/hooks/useResponsive';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const SignIn: NextPage = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ phone: '', password: '' });

  const session = useSession();
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/admin/dashboard');
    }
  }, [session.status]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await signIn('credentials', {
      phone: userInfo.phone,
      password: userInfo.password,
      redirect: false,
    });
  };
  return (
    <Box>
      <Head>
        <title>Admin - Sign in</title>
      </Head>
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <Box component="form" onSubmit={handleSubmit}>
            <ContentStyle>
              <Typography variant="h3">Login</Typography>
              <Stack spacing={2}>
                <TextField
                  value={userInfo.phone}
                  label="phone"
                  type="tel"
                  placeholder="+998"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, phone: target.value })
                  }
                />

                <TextField
                  value={userInfo.password}
                  label="Password"
                  type="password"
                  placeholder="*******"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                />
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Stack>
            </ContentStyle>
          </Box>
        </Container>
      </RootStyle>
    </Box>
  );
};

export default SignIn;
