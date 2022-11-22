import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Filter = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [state, setState] = useState<boolean>(false);
  const [news, setNews] = useState<boolean>(false);

  return (
    <Stack direction={'row'} gap={{ xs: 2.4, sm: 3 }} justifyContent="center">
      <Button
        variant={collapse ? 'contained' : 'outlined'}
        onClick={() => setCollapse(!collapse)}
        sx={{ width: 'auto', height: '45px' }}
      >
        <Typography variant="h6">Все</Typography>
      </Button>
      <Button
        variant={state ? 'contained' : 'outlined'}
        onClick={() => setState(!state)}
        sx={{ width: 'auto', height: '45px' }}
      >
        <Typography variant="h6">Статьи</Typography>
      </Button>
      <Button
        variant={news ? 'contained' : 'outlined'}
        onClick={() => setNews(!news)}
        sx={{ width: 'auto', height: '45px' }}
      >
        <Typography variant="h6">Новости</Typography>
      </Button>
    </Stack>
  );
};

export default Filter;
