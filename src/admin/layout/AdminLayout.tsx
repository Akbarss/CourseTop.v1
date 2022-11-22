/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import AdminAppBar from './AdminAppBar';
import AdminDrawer from './AdminDrawer';

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout(props: Props) {
  const [open, setOpen] = React.useState(true);
  const session = useSession();
  const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/');
    }
  }, [session.status]);

  return (
    <Box sx={{ display: 'flex' }}>
      {session.status !== 'authenticated' ? (
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
          width="100%"
          height={'100vh'}
        >
          <CircularProgress size={'50px'} />
        </Box>
      ) : (
        <>
          <CssBaseline />
          <AdminAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <AdminDrawer open={open} handleDrawerClose={handleDrawerClose} />
          </Box>
          <Box width={'100%'} sx={{ marginTop: 12, marginRight: 5 }}>
            {props.children}
          </Box>
        </>
      )}
    </Box>
  );
}
