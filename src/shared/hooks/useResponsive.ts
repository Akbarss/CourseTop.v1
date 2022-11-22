// @mui
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export default function useResponsive(
  query: 'up' | 'down' | 'between' | 'only',
  key: Breakpoint,
  start?: Breakpoint | any,
  end?: Breakpoint | any
) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  if (query === 'only') {
    return mediaOnly;
  }
  return null;
}
