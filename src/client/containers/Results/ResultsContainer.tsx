/* eslint-disable @next/next/no-img-element */
import CourseFilter, {
  MobileFilter,
} from '@/client/components/Courses/CourseFilter';
import CoursesCard from '@/client/components/Courses/CoursesCard';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import React from 'react';

interface ResultsContainerProps {
  name: string;
}

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'none',
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: 'none',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'none',
      border: 'none',
    },
  },
});

const ResultsContainer: React.FC<ResultsContainerProps> = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(rgba(103, 170, 249, 0.36), rgba(232, 65, 66, 0.2))',
        }}
        display="flex"
        justifyContent="center"
        padding={{ xs: '35px 26px', md: '50px 26px' }}
      >
        <CustomTextField
          fullWidth
          placeholder="Поиск курсов..."
          sx={{
            bgcolor: '#fff',
            borderRadius: '38px',
            border: 'none',
            maxWidth: '1000px',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    bgcolor: '#67AAF9',
                    '&:hover': { bgcolor: '#538BCA' },
                    width: '45px',
                    height: '45px',
                  }}
                >
                  <img src="/search.svg" alt="" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ paddingBottom: '50px' }}>
        <Box display="flex" gap="20px" marginTop="20px">
          <CourseFilter filter={true} />
          <Box width="100%">
            <Box
              display="flex"
              justifyContent="space-between"
              gap={{ xs: '10px', md: '20px' }}
            >
              <MobileFilter />
              <Button
                variant="outlined"
                sx={{
                  bgcolor: '#fff',
                  borderRadius: '0px',
                  color: '#000',
                  borderColor: '#000',
                  alignSelf: 'end',
                }}
              >
                Сортировать
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={{ xs: '10px', md: '20px' }}
              marginTop={{ xs: '10px', md: '15px' }}
              alignItems="center"
            >
              <CoursesCard
                title={'IELTS с Мистером Ботир '}
                about={
                  'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.'
                }
                rating={'4.9'}
                address={'г. Самарканд, Дагбитская'}
                status={'Оффлайн'}
                course={'Английский Язык'}
                level={'Intermediate'}
                duration={'3-6 месяцев'}
                price={'400.000'}
                ratingCount={'103'}
                reviews={'20'}
                unit={'UZS'}
                slug={'1'}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ResultsContainer;
