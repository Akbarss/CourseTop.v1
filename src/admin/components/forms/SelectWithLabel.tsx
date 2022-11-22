import { FormHelperText, InputLabel, Stack, TextField } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  value: string | number | any;
  handleBlur: any;
  handleChange: any;
  formId?: string;
  name: string;
  label: string;
  placeholder: string;
  touched: any;
  errors: any;
  children: ReactNode;
};

const SelectWithLabel: React.FC<Props> = ({
  value,
  handleBlur,
  handleChange,
  formId,
  name,
  label,
  placeholder,
  touched,
  errors,
  children,
}) => {
  return (
    <Stack spacing={1}>
      <InputLabel htmlFor={formId} sx={{ fontSize: '14px' }}>
        {label}
      </InputLabel>
      <TextField
        variant="outlined"
        select
        name={name}
        id={formId}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        fullWidth
        error={Boolean(touched && errors)}
      >
        {children}
      </TextField>
      {touched && errors && <FormHelperText error>{errors}</FormHelperText>}
    </Stack>
  );
};

export default SelectWithLabel;
