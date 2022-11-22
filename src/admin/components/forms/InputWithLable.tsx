import {
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';

type Props = {
  value: string | number | undefined | any;
  handleBlur: any;
  type: string;
  handleChange: any;
  formId?: string;
  name: string;
  label: string;
  placeholder: string;
  touched: any;
  errors: any;
  multiline?: boolean;
  rows?: number;
};

const InputWithLabel: React.FC<Props> = ({
  value,
  handleBlur,
  type,
  handleChange,
  formId,
  name,
  label,
  placeholder,
  touched,
  errors,
  multiline = false,
  rows = 1,
}) => {
  return (
    <Stack spacing={1}>
      <InputLabel htmlFor={formId} sx={{ fontSize: '14px' }}>
        {label}
      </InputLabel>
      <OutlinedInput
        name={name}
        multiline={multiline}
        id={formId}
        value={value}
        rows={rows}
        type={type}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        fullWidth
        error={Boolean(touched && errors)}
      />
      {touched && errors && <FormHelperText error>{errors}</FormHelperText>}
    </Stack>
  );
};

export default InputWithLabel;
