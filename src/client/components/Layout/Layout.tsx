import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Box, Grow } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Box>
        <Header />
        <Grow in={true} mountOnEnter unmountOnExit {...{ timeout: 1200 }}>
          <Box mt={{ xs: 0, md: 9 }} maxHeight={'100%'}>
            {props.children}
          </Box>
        </Grow>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
