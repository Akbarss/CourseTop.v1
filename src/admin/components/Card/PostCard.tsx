import { Avatar, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

const PostCard = () => {
  return (
    <Link href={'/blog'}>
      <Card sx={{ maxWidth: '100%', height: 'auto' }}>
        <Stack spacing={'20px'} pb={3}>
          <Avatar
            src="user"
            sx={{
              width: '100%',
              borderRadius: 0,
              boxShadow: '0px 10px 10px -15px gray',
              height: 200,
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
      </Card>
    </Link>
  );
};

export default PostCard;
