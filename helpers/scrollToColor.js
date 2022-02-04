import React from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function ScrollToColor02(props) {
  const {
    threshold,
    bgColorBefore,
    bgColorAfter,
    textColorBefore,
    textColorAfter,
    fadeIn,
    fadeOut,
    paddingBefore,
    paddingAfter,
    children,
    ...other
  } = {
    threshold: 0,
    bgColorBefore: 'transparent',
    bgColorAfter: '#fff',
    fadeIn: '0.3s ease-in',
    fadeOut: '0.3s ease-out',
    paddingBefore: '0',
    paddingAfter: '5px',
    ...props,
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      boxShadow: trigger ? 'rgba(43, 83, 135, 0.08) 0px 3px 8px 0px' : 'none',
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      transition: trigger ? fadeIn : fadeOut,
    },
    ...other,
  });
}
