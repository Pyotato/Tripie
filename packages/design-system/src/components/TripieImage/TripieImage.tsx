'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';

import { PLACEHOLDER } from '../../shared/resource';
import Text from '../Text';
import TripieContainer from '../TripieContainer';
import Style from './tripie-image.module.scss';

const cx = classNames.bind(Style);

export type ImageSizes = 'default' | 'full' | 'large' | 'medium' | 'small' | 'tiny' | 'icon' | 'card';

const TripieImage = ({
  alt,
  src,
  ref,
  sizes = 'default',
  className,
  withBorder = true,
  blurDataURL,
  fill = true,
}: {
  alt: string;
  src?: string;
  // ref?: RefObject<any>;
  ref?: (node?: Element | null | undefined) => void;
  className?: string;
  sizes?: ImageSizes;
  blurDataURL?: string;
  withBorder?: boolean;
  fill?: boolean;
}) => {
  return (
    <TripieContainer
      margin="none"
      className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border', className)}
    >
      {blurDataURL == null ? (
        <img
          className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border')}
          src={src ?? PLACEHOLDER}
          alt={`${alt}의 이미지일 수 있음`}
        />
      ) : (
        <Image
          src={src ?? PLACEHOLDER}
          alt={alt}
          sizes={'(min-width:640px) 50vw, 100vw'}
          placeholder="blur"
          fill={fill}
          blurDataURL={blurDataURL}
          ref={ref}
        />
      )}
    </TripieContainer>
  );
};

const ImageWithSourceUrl = ({
  alt,
  src,
  ref,
  className,
  sizes = 'medium',
  sourceUrl,
  withBorder = true,
  blurDataURL,
}: {
  alt: string;
  src?: string;
  // ref?: RefObject<any>;
  ref?: (node?: Element | null | undefined) => void;
  className?: string;
  sourceUrl: string;
  sizes?: ImageSizes;
  withBorder?: boolean;
  blurDataURL?: string;
}) => {
  return (
    <TripieContainer margin="none" className={cx('img-wrap', withBorder ?? 'with-border', className)}>
      <TripieImage src={src} alt={alt} ref={ref} sizes={sizes} blurDataURL={blurDataURL} />
      <Text className={cx('source-url', 'img-source')}>{`출처 ${sourceUrl}`}</Text>
    </TripieContainer>
  );
};

TripieImage.WithSourceUrl = ImageWithSourceUrl;

export default TripieImage;
