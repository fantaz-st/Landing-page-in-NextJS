import { grey, indigo, blue } from '@mui/material/colors';

const heading = {
  fontFamily: 'Montserrat, sans-serif',

  color: grey[800],
  fontWeight: '600',
};

const body = {
  fontFamily: 'Montserrat, sans-serif',
  color: '#000',
  fontWeight: '400',
};

const link = {
  cursor: 'pointer',
  fontWeight: '500',
  fontFamily: 'Montserrat, sans-serif',

  '&:hover': {
    color: indigo[500],
  },
};

export const typography = {
  fontFamily: 'Montserrat, sans-serif',

  h1: {
    ...heading,
    fontSize: '3.6rem',
    lineHeight: '4rem',
    marginBottom: '2rem',
  },
  h2: {
    ...heading,
    fontSize: '3rem',
    lineHeight: '3.6rem',
    marginBottom: '2rem',
  },
  h3: {
    ...heading,
    fontSize: '1.5rem',
  },
  h4: {
    ...heading,
    fontSize: '1rem',
    lineHeight: '1.33rem',
    color: blue[900],
  },
  body1: {
    ...body,
    fontSize: '1.25rem',
    lineHeight: '1.8rem',
  },
  body2: {
    ...body,
    fontSize: '1.25rem',
    lineHeight: '1.4rem',
  },
  body3: {
    ...body,
    fontSize: '1rem',
    lineHeight: '1.2rem',
  },
  link1: {
    ...link,
    color: indigo[500],
    fontSize: '1.4rem',
  },
  link2: {
    ...link,
    color: '#000',
    fontSize: '1rem',
    lineHeight: '1.2rem',
  },
  link3: {
    ...link,
    color: blue[900],
    fontSize: '1rem',
    lineHeight: '1.2rem',
    textDecoration: 'none !important',
  },
};
