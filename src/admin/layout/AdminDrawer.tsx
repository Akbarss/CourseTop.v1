import React from 'react';
// mui
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import List from '@mui/material/List';
// custom
import { adminRoutes } from '../routes/admin-routes';
import Link from 'next/link';

type Props = {
  open: boolean;
  handleDrawerClose: () => any;
};

export const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AdminDrawer = (props: Props) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={props.open}>
      <DrawerHeader>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {adminRoutes.map((route) => (
        <span key={route.id}>
          <List>
            <ListItem sx={{ display: props.open ? 'block' : 'none' }}>
              <ListItemText primary={route.title} />
            </ListItem>
            {route.routes.map((r) => (
              <ListItem key={r.path} disablePadding sx={{ display: 'block' }}>
                <Link href={r.path}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: props.open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {r.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={r.title}
                      sx={{ opacity: props.open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </span>
      ))}
    </Drawer>
  );
};

export default AdminDrawer;
