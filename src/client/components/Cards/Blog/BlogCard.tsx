import React from 'react';
import { Avatar, Box, Stack } from '@mui/material';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';

const BlogCard = () => {
  const _id = uuidv4();
  return (
    <Link href={`/blog/${_id}`}>
      <Stack direction={'row'} justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width={'100%'}
          height={'auto'}
          borderBottom="3px solid"
          borderColor={'#000000'}
          borderLeft="1px solid #80808067"
          borderRight="1px solid #80808067"
          borderTop="1px solid #80808067"
          sx={{
            transition: 'all 500ms',
            borderRadius: '5px 5px 0px 0px',
            cursor: 'pointer',
            opacity: '.95',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0px 0px 30px #8080809c',
              bgcolor: '#fff',
              opacity: '1',
            },
          }}
        >
          <Stack spacing={'20px'} pb={3}>
            <Avatar
              src="user"
              sx={{
                width: '100%',
                borderRadius: 0,
                boxShadow: '0px 10px 10px -15px gray',
                height: {
                  xs: 150,
                  sm: 180,
                  md: 200,
                  mdP: 180,
                  lg: 220,
                  xl: 250,
                },
              }}
            />
            <Stack spacing={3} p="0px 15px">
              <Stack
                direction={'row'}
                alignItems="center"
                justifyContent={'space-between'}
              >
                <Typography
                  variant="subtitle1"
                  color="#0E2944"
                  sx={{ opacity: '.7' }}
                >
                  5 мин
                </Typography>
                <Stack
                  p="2px 8px"
                  minWidth={70}
                  textAlign="center"
                  color="#FAFCFE"
                  bgcolor={'#06314D'}
                >
                  <Typography variant="subtitle1">Новости</Typography>
                </Stack>
              </Stack>

              <Typography variant="h6">
                Рыбатекст используется дизайнерами, проектировщиками.
              </Typography>
              <Stack spacing={1} direction="row" alignItems="center">
                <Avatar src={'user'} sx={{ width: 50, height: 50 }} />
                <Stack justifyContent="space-between">
                  <Typography variant="h6">Мухаммад Собиров</Typography>
                  <Typography
                    variant="subtitle1"
                    color="#0E2944"
                    sx={{ opacity: '.7' }}
                  >
                    23 июня 2022 года
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Link>
  );
};

export default BlogCard;
