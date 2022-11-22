import { ReactNode, useMemo } from 'react';
import { CssBaseline } from '@mui/material';

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import ComponentsOverrides from './overrides';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const themeOptions: any = useMemo(
    () => ({
      palette: palette,
      shape: { borderRadius: 5 },
      typography: typography,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          mdP: 1200,
          lg: 1400,
          xl: 2536,
        },
      },
    }),
    []
  );
  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
