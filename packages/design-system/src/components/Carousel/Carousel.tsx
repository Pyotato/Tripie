'use client';
import classNames from 'classnames/bind';

import { ReactElement, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import NoStyleButton from '../TripieButton/NoStyle/NoStyleButton';
import TripieContainer from '../TripieContainer/TripieContainer';
import Icon from '../TripieIcon/Icon';
import Style from './carousel.module.scss';

const cx = classNames.bind(Style);

const Carousel = ({ items, className }: { items: ReactElement[]; className?: string }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleScrollButton = useCallback(
    (direction: 'prev' | 'next') => {
      let next = focusedIndex;
      setFocusedIndex(prevIndex => {
        if (direction === 'prev') {
          next = prevIndex != 0 ? prevIndex - 1 : 0;
          return next;
        }
        if (direction === 'next') {
          next = prevIndex != items.length - 1 ? prevIndex + 1 : items.length - 1;
          return next;
        }

        return prevIndex;
      });

      if (ref?.current?.children?.[next] != null) {
        ref.current.children?.[next].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },
    [ref, focusedIndex]
  );

  return (
    <TripieContainer margin="none" className={cx('carousel')}>
      {items.length > 1 && focusedIndex != 0 ? (
        <NoStyleButton name="previous" action={() => handleScrollButton('prev')}>
          <Icon.Scroll className={cx('scroll-icon', 'next-icon')} next={false} />
        </NoStyleButton>
      ) : null}
      <TripieContainer margin="none" className={cx('flex-items', 'carousel-inner')}>
        <TripieContainer margin="none" className={cx('insta-like-carousel-container', className)} refs={ref}>
          {items.map((item, index) => (
            <CarouselItem
              key={`carousel-item-${item?.key}`}
              index={index}
              setFocusedIndex={setFocusedIndex}
              focusedIndex={focusedIndex}
            >
              {item}
            </CarouselItem>
          ))}
        </TripieContainer>
      </TripieContainer>
      {items.length > 1 && focusedIndex != items.length - 1 ? (
        <NoStyleButton name="next" action={() => handleScrollButton('next')}>
          <Icon.Scroll className={cx('scroll-icon', 'prev-icon')} />
        </NoStyleButton>
      ) : null}
    </TripieContainer>
  );
};

const CarouselItem = ({
  children,
  className,
  index,
  setFocusedIndex,
  focusedIndex,
  threshold = 0.6,
}: {
  children: ReactNode;
  index: number;
  className?: string;
  setFocusedIndex: (index: number) => void;
  focusedIndex: number;
  threshold?: number;
}) => {
  const { ref, inView } = useInView({
    threshold: threshold, // 60% 보여야 동작
    triggerOnce: false, // 가시성 체크
  });

  // 보이면 스크롤한 인덱스로 이동
  useEffect(() => {
    if (inView && index != focusedIndex) {
      setFocusedIndex(index);
    }
  }, [inView, focusedIndex]);

  // 버튼 클릭으로 보이지 않는 경우 인접한 캐로솔로 인덱스 포커스
  useEffect(() => {
    if (!inView && index != focusedIndex) {
      setFocusedIndex(focusedIndex);
    }
  }, [inView, focusedIndex]);

  return (
    <TripieContainer
      margin="none"
      refs={ref as unknown as RefObject<HTMLDivElement>}
      className={cx('insta-like-carousel-item', focusedIndex == index ? 'focused' : '', className)}
    >
      {children}
    </TripieContainer>
  );
};

// 좌표를 클릭하는 등 외부의 조작으로 carousel 포커싱이 결정되어 스타일만 carousel 형태
const ControlledCarousel = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <TripieContainer margin="none" className={cx('carousel')}>
      <TripieContainer margin="none" className={cx('flex-items', 'carousel-inner')}>
        <TripieContainer margin="none" className={cx('insta-like-carousel-container', className)}>
          {children}
        </TripieContainer>
      </TripieContainer>
    </TripieContainer>
  );
};

Carousel.Controlled = ControlledCarousel;

export default Carousel;
