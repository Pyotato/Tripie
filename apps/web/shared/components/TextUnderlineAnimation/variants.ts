import COLORS from 'constants/colors';
import { Variants } from 'framer-motion';

export const TEXT_UNDERLINE_VARIANTS = {
  DIVIDER: {
    closed: () => ({
      x: '0%',
      width: '0%',
      translateY: '-10px',
      backgroundColor: 'transparent',
    }),
    open: () => ({
      x: '0%',
      backgroundColor: COLORS[50],
      width: '100%',
      transition: {
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    }),
  },
} as Variants;
