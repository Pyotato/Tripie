import COLORS from 'constants/colors';
import { Variants } from 'framer-motion';

export const ACCORDIAN_VARIANTS = {
  DETAILS: {
    closed: () => ({
      height: '0%',
      opacity: 0,
    }),
    open: () => ({
      transform: {
        height: '100%',
      },
      transition: {
        duration: 2,
        bounce: 0,
        damping: 2,
        stiffness: 10,
      },
    }),
  },
  BUTTON: {
    closed: () => ({}),
    open: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
  DIVIDER: {
    closed: () => ({
      backgroundColor: COLORS[400],
    }),
    open: () => ({
      backgroundColor: COLORS[50],
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
};
