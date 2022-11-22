/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Tab,
  Tabs,
} from '@mui/material';
import Logo from '../../../../public/logo.svg';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Menu from './header-popover/Menu';
import LanguagePopover from '../Layout/header-popover/Popover';
import { input, links } from './dataLinks';
import { HeaderTextField } from '@/shared/components/TextField/CustomTextField';
import LayoutModal from '@/shared/components/modals/LayoutModal';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Header(props: any) {
  const router = useRouter();
  const uRouter = router.pathname.slice(1, 4);
  const [open, setOpen] = React.useState<boolean>(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(uRouter);

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            bgcolor: '#FFFFFF',
            boxShadow: '0px 1px 17px rgba(0, 0, 0, 0.14)',
            zIndex: 10,
            padding: '7px',
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gridGap: '20px',
            }}
          >
            <NextLink href="/">
              <Box>
                <Image
                  src={Logo}
                  alt="logo"
                  width="160.72px"
                  height="65.05px"
                  style={{ cursor: 'pointer' }}
                  layout="fixed"
                />
              </Box>
            </NextLink>
            <Box>
              <Box
                display={{ xs: 'none', sm: 'none', md: 'flex' }}
                gap="27px"
                alignItems={'center'}
                justifyContent="cenetr"
                pt={1}
              >
                {links.map((i) => (
                  <NextLink href={i.link} key={i._id}>
                    <Typography
                      textAlign={'center'}
                      fontSize="17px"
                      fontWeight={500}
                      sx={{
                        cursor: 'pointer',
                        color: uRouter == i.route ? '#E84142' : '#0E2944',
                      }}
                    >
                      {i.name}
                    </Typography>
                  </NextLink>
                ))}
              </Box>
            </Box>
            <Box
              display={
                input.includes(uRouter) ? { xs: 'none', md: 'block' } : 'none'
              }
              width="35%"
            >
              <HeaderTextField
                fullWidth
                placeholder="Поиск курсов..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/searchH.svg" alt="" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box display={'flex'} gap="15px" alignItems={'center'}>
              <Box
                display={{ xs: 'none', sm: 'block' }}
                gap="27px"
                alignItems={'center'}
              >
                <LanguagePopover />
              </Box>

              <Box display={{ xs: 'none', md: 'block' }}>
                <Button
                  variant="outlined"
                  onClick={() => setOpen(true)}
                  color="secondary"
                  sx={{
                    borderRadius: 50,
                    height: 43,
                    width: '93px',
                  }}
                >
                  Войти
                </Button>
              </Box>
              <Box display={{ xs: 'block', md: 'none' }} pt={0.2}>
                <Menu />
              </Box>
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box
        display={input.includes(uRouter) ? { xs: 'flex', md: 'none' } : 'none'}
        padding="20px 20px 30px 20px"
        marginTop="90px"
      >
        <HeaderTextField
          fullWidth
          placeholder="Поиск курсов..."
          sx={{ bgcolor: '#fff', borderRadius: '38px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/searchH.svg" alt="" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <LayoutModal open={open} setOpen={setOpen} zIndex={10}>
        <Box sx={{ width: '100%', typography: 'body1' }}></Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Войти" {...a11yProps(0)} />
          <Tab label="Регистрация" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </LayoutModal>
    </>
  );
}
