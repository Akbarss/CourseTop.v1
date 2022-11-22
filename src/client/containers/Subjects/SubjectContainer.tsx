/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import SubjectCard from '@/client/components/Cards/Subjects/SubjectCard';
import { subjects } from '@/client/components/data/allArray';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';
import { Category, CategoryCont } from '@/shared/types/category';

interface SubjectContProps {
  data: CategoryCont;
}

const SubjectContainer: React.FC<SubjectContProps> = ({ data }) => {
  console.log(data);

  return (
    <Container maxWidth="lg" sx={{ padding: '40px 20px' }}>
      <Box
        display="flex"
        flexDirection="column"
        gap="30px"
        justifyContent="center"
      >
        <Typography variant="h2">Предметы</Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Grid container columns={12} spacing={2}>
          {data.map((i: any) => (
            <Grid item xs={12} sm={6} md={4} key={i.id}>
              <SubjectCard
                id={i.id}
                title={i.title}
                count={i.count}
                tags={i.Subcategory}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SubjectContainer;
