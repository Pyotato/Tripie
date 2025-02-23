'use client';
import { AnimatedButton, Container, Headings, Icon, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import COMPANION_LIST from 'constants/companions';

import { ContinentKeys } from 'models/Continent';
import { useCallback, useState } from 'react';
import CompanionList from './List';
import Style from './companion.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion?: string;
  };
  onNext: (companion: string) => void;
}

export type Companion = keyof typeof COMPANION_LIST;

const CompanionStep = ({ context, onNext }: Props) => {
  const [selected, setSelected] = useState<Array<Companion> | []>(
    context?.companion == null ? [] : (context.companion.split(',') as Array<Companion>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate />
        </Container>
        <Headings.H2>
          <Text.Accented>누구</Text.Accented>와 떠나나요?
        </Headings.H2>
      </Container>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}

        <Icon.Plane />
      </Container>
      <CompanionList context={context} selected={selected} setSelected={setSelected} />
      <Container margin="l" applyMargin="top">
        <AnimatedButton
          withBorder={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <Container margin="none" className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon />
              </>
            )}
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default CompanionStep;
