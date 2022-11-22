import React from 'react';
import { Grow, Box, Typography, Stack, Grid } from '@mui/material';
import Filter from './Filter/Filter';
import BlogCard from '@/client/components/Cards/Blog/BlogCard';
import { blog } from '../../components/data/allArray';

const BlogContainer = () => {
  return (
    <>
      <Box bgcolor={'#fff'} height={'auto'} pb={6}>
        <Grow in={true} mountOnEnter unmountOnExit {...{ timeout: 1200 }}>
          <Stack
            direction={'column'}
            justifyContent="center"
            gap={4}
            pt={{ xs: 4, sm: 9 }}
          >
            <Typography variant="h3" textAlign={'center'}>
              Рыбатекст используется
              <br /> дизайнерами, проектировщиками и<br /> фронтендерами.
            </Typography>
            <Box>
              <Filter />
            </Box>
            <Grid
              container
              spacing={3}
              columns={{ xs: 2, sm: 5, md: 12 }}
              justifyContent={'center'}
              p={{ xs: 2.5, sm: '0.87vw 0', md: '0.87vw 6.8vw' }}
            >
              {blog.map((i) => (
                <Grid key={i.id} item xs={2} md={4}>
                  <BlogCard />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grow>
      </Box>
    </>
  );
};

export default BlogContainer;
