// @mui
import { Box, SxProps } from '@mui/material';
//next
import Link from 'next/link';

// ----------------------------------------------------------------------
interface Props {
  disabledLink?: boolean;
  sx?: SxProps;
}

export default function Logo(props: Props) {
  const { disabledLink = false, sx } = props;
  const logo = (
    <Box
      component="img"
      src={'/logo.svg'}
      sx={{ width: 180, height: 'auto', ...sx }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <Link href="/">{logo}</Link>;
}
