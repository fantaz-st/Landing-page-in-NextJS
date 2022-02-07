import { grey, blue } from '@mui/material/colors';

const buttonBase = {
  borderRadius: '2rem',
  textTransform: 'none',
  padding: '0.5rem 2rem',
  fontSize: '1rem',
  fontWeight: '500',
};

export const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1200px',
        margin: '0 auto',
        flex: '1',
        padding: '6rem 0 3rem 0',
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      circular: {
        backgroundColor: blue[600],
        '&:hover': {
          backgroundColor: blue[900],
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      outlined: {
        ...buttonBase,
        backgroundColor: 'transparent',
        color: blue[600],
        border: `1px solid ${blue[900]}`,
        '&:hover': {
          backgroundColor: blue[900],
          color: '#fff',
          boxShadow: `
      0px 2px 4px rgba(46,41,51,0.08),
      0px 5px 10px rgba(71,63,79,0.16)
    `,
        },
      },
      contained: {
        ...buttonBase,
        backgroundColor: blue[600],
        color: '#fff',
        border: '1px solid transparent',
        '&:hover': {
          backgroundColor: blue[900],
          boxShadow: `
      0px 2px 4px rgba(46,41,51,0.08),
      0px 5px 10px rgba(71,63,79,0.16)
    `,
        },
      },
      text: {
        ...buttonBase,
        backgroundColor: 'transparent',
        color: grey[900],
        border: '1px solid transparent',
        '&:hover': {
          border: ` 1px solid ${grey[900]}`,
          boxShadow: `
      0px 2px 4px rgba(46,41,51,0.08),
      0px 5px 10px rgba(71,63,79,0.16)
    `,
        },
      },
    },
  },
};
/* variants: [
      {
        props: { variant: 'outlined' },
        style: {
          fontSize: '0.75rem',
          fontWeight: '600',
          borderRadius: '0.5rem',
          color: grey[800],
          backgroundColor: blue[200],
          padding: '0.25rem 1rem',
          '&:hover': {
            backgroundColor: grey[500],
            color: white,
          },
        },
      },
    ],
  }, */
