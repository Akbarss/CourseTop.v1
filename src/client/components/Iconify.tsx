// icons
import { Icon } from '@iconify/react';
// @mui
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function Iconify({
  icon,
  sx,
  ...other
}: {
  icon: string;
  sx?: SxProps;
  width?: string | number;
  height?: string | number;
}) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
