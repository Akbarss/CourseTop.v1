import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import ConfirmDeleteMenu from '../../../client/components/Menu/ConfirmDeleteMenu';
import { deleteCourse } from '../../../shared/redux/features/courses/courseThunk';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { Course } from '../../../shared/types/course';
import { getDuration } from '../../../shared/utils/formatDate';
import { fCurrency } from '../../../shared/utils/formatNumber';

type Props = Course;

const AdminCourseCard: React.FC<Props> = ({ title, cover_image, ...other }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => dispatch(deleteCourse(id));

  return (
    <Card sx={{ height: { xs: '200px', md: '250px' } }}>
      <Grid container height="100%">
        <Grid item xs={4}>
          <Avatar
            src={cover_image}
            sx={{
              borderRadius: 0,
              height: { xs: '200px', md: '250px' },
              width: '100%',
            }}
          >
            course
          </Avatar>
        </Grid>
        <Grid item xs={8} height="100%">
          <Stack direction={'row'} width="100%" height="100%">
            <Stack padding={'20px'} spacing={1} width="70%">
              <Typography variant={'h4'}>{title}</Typography>
              <Typography variant={'body2'}>
                {other.short_description}
              </Typography>
            </Stack>
            <Stack padding={'20px'}>
              <Link href={`/admin/course/edit/${other.id}`}>
                <Button variant="outlined">edit</Button>
              </Link>
              <ConfirmDeleteMenu
                handleDelete={handleDelete}
                targetId={other.id}
              />
            </Stack>
            <Box
              sx={{
                width: '1px',
                height: '200px',
                backgroundColor: '#BBBBBB',
                mt: '5%',
                mb: '5%',
              }}
            />
            <Stack padding={'20px'} width="30%" spacing={1}>
              <Typography variant="body2">
                {other.provider.state}, {other.provider.city}
              </Typography>
              <Divider />
              <Typography variant="body2">{other.course_type}</Typography>
              <Divider />

              <Typography variant="body2">{other.category.title}</Typography>
              <Divider />

              <Typography variant="body2">{other.level}</Typography>
              <Divider />

              <Typography variant="body2">
                {getDuration(other.duration)}
              </Typography>
              <Divider />

              <Typography variant="body2">
                {fCurrency(other.price)} {other.price_info}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AdminCourseCard;
