'use client';
import classNames from 'classnames/bind';
import { AnimationProps, Variants, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Style from './icon.module.scss';

import { ICON_RESOURCE } from '../../shared/resource';
import { ICON_VARIANTS } from './variants';

const cx = classNames.bind(Style);

export type MotionSlideUpProps = Partial<AnimationProps> & { children?: ReactNode; className?: string };

export type Transport = 'WALK' | 'TRAM' | 'TRAIN' | 'SHIP' | 'BUS' | 'FLAG' | 'CAR';

export type IconProps = {
  className?: string;
  withBorder?: boolean;
  onTapStart?: () => void;
  animate?: AnimationProps['animate'];
  variants?: Variants;
  src?: string;
  transition?: AnimationProps['transition'];
  onTap?: () => void;
  sizes?: 'large' | 'icon';
};

const Icon = ({
  className,
  onTapStart,
  // src = './icons/arrow.png',
  src = ICON_RESOURCE('ARROW'),
  animate,
  sizes = 'icon',
  variants = ICON_VARIANTS.DEFAULT,
  transition,
}: Readonly<IconProps>) => {
  return (
    <motion.div
      onTapStart={onTapStart}
      className={cx(sizes, className)}
      variants={variants}
      transition={transition}
      animate={animate}
    >
      <img src={src} alt={`${src} icon`} />
    </motion.div>
  );
};

export type NavigationDirection = { direction?: 'back' | 'front'; disabled?: boolean };
export type NavigationIconProps = IconProps & NavigationDirection;

const NavigateIcon = ({
  className,
  direction = 'back',
  src,
  sizes = 'icon',
  animate,
  disabled,
  variants = ICON_VARIANTS.NAVIGATE(direction),
  transition,
}: Readonly<NavigationIconProps>) => {
  const navigate = useRouter();

  const onNavigate = ({ direction }: NavigationDirection) => {
    direction === 'back' ? navigate.back() : navigate.forward();
  };

  return (
    <motion.button
      disabled={disabled}
      onTapStart={() => onNavigate({ direction })}
      whileTap={'hover'}
      whileHover={'hover'}
      className={cx(sizes, className)}
      variants={variants}
      transition={transition}
      initial={'closed'}
      animate={animate}
    >
      <img src={ICON_RESOURCE('ARROW')} alt={src + '버튼'} />
    </motion.button>
  );
};

const RefreshIcon = ({ className, onTapStart, animate, transition, sizes = 'icon' }: Readonly<IconProps>) => {
  return (
    <motion.div
      onTapStart={onTapStart}
      whileTap={'hover'}
      whileHover={'hover'}
      className={cx(sizes, className)}
      variants={ICON_VARIANTS.REFRESH('undo')}
      transition={transition}
      initial={'closed'}
      animate={animate}
    >
      <img src={ICON_RESOURCE('REFRESH')} alt={'새로고침 버튼'} />
    </motion.div>
  );
};

const PlaneIcon = ({ className, sizes = 'icon' }: Readonly<IconProps>) => {
  return (
    <motion.img
      variants={ICON_VARIANTS.PLANE}
      animate={'fly'}
      initial={'rotate'}
      src={ICON_RESOURCE('PLANE')}
      className={cx(sizes, 'plane', className)}
    />
  );
};

const CloudIcon = ({ index = 0, sizes = 'icon' }: { index: number; sizes?: IconProps['sizes'] }) => {
  return (
    <motion.img
      variants={ICON_VARIANTS.CLOUD}
      initial={{
        opacity: `${0.2}`,
        translateX: `${80 * (Math.random() * (index + 1))}vw`,
        translateY: `${Math.random() * 100}px`,
      }}
      animate={{ translateX: '-100vw' }}
      transition={{ decelerate: 2, repeat: Infinity, duration: 35, bounce: 0, delay: index * 0.1 }}
      src={ICON_RESOURCE('CLOUD')}
      className={cx(sizes)}
    />
  );
};

const LoadingIcon = ({ className, sizes = 'icon' }: Readonly<IconProps>) => {
  return (
    <motion.img
      animate={{ rotate: '360deg' }}
      transition={{ repeat: Infinity, duration: 10, bounce: 0 }}
      src={ICON_RESOURCE('LOADING')}
      className={cx(sizes, className)}
    />
  );
};

const CursorIcon = ({
  hovered = '',
  className,
  transition,
  sizes = 'icon',
}: Readonly<IconProps> & { hovered?: string }) => {
  return (
    <motion.img
      variants={ICON_VARIANTS.CURSOR}
      src={ICON_RESOURCE('CURSOR')}
      initial={'initial'}
      animate={hovered}
      transition={transition}
      className={cx(sizes, className)}
    />
  );
};

const ScrollIcon = ({
  hovered = '',
  className,
  next = true,
  transition,
  onTapStart,
  sizes = 'icon',
}: Readonly<IconProps> & {
  hovered?: string;
  next?: boolean;
}) => {
  return (
    <motion.img
      variants={ICON_VARIANTS.SCROLL(next)}
      onTapStart={onTapStart}
      src={ICON_RESOURCE('NEXT')}
      initial={'initial'}
      animate={hovered}
      transition={transition}
      className={cx(sizes, next ? 'next' : 'prev', className)}
    />
  );
};

const TransportIcon = ({
  active = false,
  type = 'FLAG',
  className,
  sizes = 'icon',
}: Readonly<IconProps> & {
  active?: boolean;
  type?: Transport;
}) => {
  return (
    <motion.img
      animate={active ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
      transition={active ? { repeat: Infinity, repeatType: 'loop', duration: 0.8, ease: 'easeInOut' } : {}}
      className={cx(sizes, className)}
      src={ICON_RESOURCE(type)}
    />
  );
};

const XIcon = ({ className, sizes = 'icon' }: Readonly<IconProps>) => {
  return <motion.img className={cx(sizes, className)} src={ICON_RESOURCE('X')} />;
};

const CheckIcon = ({ className, sizes = 'icon' }: Readonly<IconProps>) => {
  return <motion.img className={cx(sizes, className)} src={ICON_RESOURCE('CHECK')} />;
};

Icon.Navigate = NavigateIcon;
Icon.Refresh = RefreshIcon;
Icon.Plane = PlaneIcon;
Icon.Cloud = CloudIcon;
Icon.Loading = LoadingIcon;
Icon.Transport = TransportIcon;
Icon.Cursor = CursorIcon;
Icon.Scroll = ScrollIcon;
Icon.X = XIcon;
Icon.Check = CheckIcon;

export default Icon;
