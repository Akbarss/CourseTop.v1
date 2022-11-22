import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NextLink from 'next/link';

const SearchBlock = () => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection="column"
        mt={{ xs: -3.5, sm: 3, md: 12.5 }}
        justifyContent="center"
      >
        <Typography
          variant="h1"
          fontSize={{ xs: '25px', sm: '52px', md: '47px' }}
          mb={{ xs: '10px', sm: '0px' }}
        >
          Найди подходящий курс
        </Typography>
        <Box display={{ xs: 'block', sm: 'none' }}>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            mb={{ xs: '9px', sm: '0px' }}
            pl="5px"
          >
            Вы можете найти курсы по всему Узбекистану
          </Typography>
        </Box>
        <Box display={{ xs: 'none', sm: 'block' }}>
          <Typography
            fontSize={{ xs: '15px', sm: '21px', md: '18px' }}
            fontWeight={400}
          >
            Вы можете найти необходимый вам курсы по всему Узбекистану
          </Typography>
        </Box>
        <Box mt={2} width="100%">
          <Paper
            component="form"
            sx={{
              p: '2px 15px',
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', lg: '650px' },
              height: '65px',
              borderRadius: '38px',
              boxShadow: '0px 4px 14px rgba(6, 49, 77, 0.2)',
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Поиск курсов..." />
            <IconButton
              sx={{
                p: '10px',
                bgcolor: '#67AAF9',
                color: '#fff',
                ':hover': { bgcolor: '#67AAF9' },
                boxShadow: ' 0px 4px 15px rgba(6, 49, 77, 0.2)',
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box display={'flex'} justifyContent="end">
            <NextLink href={'/subjects'}>
              <Typography
                // textAlign={'end'}
                m="10px 15px"
                color={'#67AAF9'}
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                variant="subtitle1"
              >
                предметы
              </Typography>
            </NextLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchBlock;
