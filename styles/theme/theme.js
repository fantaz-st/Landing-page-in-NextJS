import { createTheme } from '@mui/material/styles';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { typography } from './typography';
import { palette } from './palette';

export const theme = createTheme({
  breakpoints,
  colors,
  components,
  palette,
  typography,
});
