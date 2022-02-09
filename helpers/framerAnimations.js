import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export const ScaleUp = ({ children, multiplier = 1, ...rest }) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 * multiplier }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const SlideUp = ({ children, multiplier = 1, ...rest }) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 * multiplier }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const SlideFromRight = ({ children, multiplier = 1, ...rest }) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 * multiplier }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 100, opacity: 0 },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
