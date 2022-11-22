import DashboardIcon from '@mui/icons-material/Dashboard';
import VerifiedIcon from '@mui/icons-material/Verified';
import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/Category';
import { Book } from '@mui/icons-material';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

export const adminRoutes = [
  {
    id: 'content-group',
    title: 'Content',
    routes: [
      { path: '/admin/dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
      { path: '/admin/providers', title: 'Providers', icon: <VerifiedIcon /> },
      { path: '/admin/courses', title: 'Courses', icon: <BookIcon /> },
    ],
  },
  {
    id: 'config-group',
    title: 'Configurations',
    routes: [
      {
        path: '/admin/categories',
        title: 'Categories',
        icon: <CategoryIcon />,
      },
    ],
  },

  {
    id: 'blog-group',
    title: 'Blog',
    routes: [
      {
        path: '/admin/blog/posts',
        title: 'Posts',
        icon: <Book />,
      },
      {
        path: '/admin/blog/authors',
        title: 'Authors',
        icon: <InterpreterModeIcon />,
      },
      {
        path: '/admin/blog/categories',
        title: 'Categories',
        icon: <CategoryIcon />,
      },
    ],
  },
];
