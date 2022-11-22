import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const HeaderTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#C9C9C9',
      border: '1px solid #C9C9C9',
      borderRadius: '38px',
    },
    '&:hover fieldset': {
      borderColor: '#C9C9C9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C9C9C9',
      border: '2px solid #C9C9C9',
    },
  },
});
