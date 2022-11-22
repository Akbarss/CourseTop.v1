import React from 'react';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import Link from 'next/link';

interface SubjectCardProps {
  id: string;
  title: string;
  count: number;
  tags: any;
}

const SubjectCard: React.FC<SubjectCardProps> = (props) => {
  const lastDigit = props.count % 10;
  const ends = [2, 3, 4];
  const noEnd = [11, 12, 13, 14];

  return (
    <Box maxWidth="370px">
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar
          src="/Icon/category/math.svg"
          sx={{
            bgcolor: '#67AAF9',
            padding: '10px',
            width: '56px',
            height: '56px',
          }}
        />
        <Box>
          <Link passHref href={props.id}>
            <Typography variant="h4">{props.title}</Typography>
          </Link>

          <Typography>
            {props.count} курс
            {noEnd.includes(props.count)
              ? 'ов'
              : lastDigit === 1
              ? ''
              : ends.includes(lastDigit)
              ? 'а'
              : 'ов'}
          </Typography>
        </Box>
      </Box>
      <Box display={'flex'} marginTop="15px" gap="10px" flexWrap={'wrap'}>
        {props.tags?.map((i: any) => (
          <Link href={`/courses/${i.slug}`} passHref key={i._id}>
            <Chip
              label={i.title}
              component="a"
              href="#chip"
              variant="outlined"
              clickable
              sx={{
                p: 0.9,
                bgcolor: '#fff',
                boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default SubjectCard;
