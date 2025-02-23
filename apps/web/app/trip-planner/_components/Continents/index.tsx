import { AnimatedButton, Container, Headings, Icon, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'models/Continent';
import { useMemo, useState } from 'react';

import RotatingGlobe from 'shared/components/Globe/RotatingGlobe';

import { ContinentList } from './ContinentLIst';
import Style from './continents.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: { continent?: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  continent: ContinentKeys;
  onNext: (country: { continent?: ContinentKeys }) => void;
}

export function ContinentStep({ context, onNext }: Readonly<Props>) {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKeys | 'ALL'>(() =>
    context?.continent == null
      ? 'ALL'
      : Object.values(CONTINENTS).reduce((acc, continent, index) => {
          if (continent.id === context?.continent) return Object.keys(CONTINENTS)[index] as ContinentKeys;
          return acc;
        }, 'ALL' as ContinentKeys)
  );

  const selectedContinentName = useMemo(() => {
    const continentName = Object.keys(CONTINENTS).find(continent => continent === selectedContinent);
    return CONTINENTS[continentName as ContinentKeys];
  }, [selectedContinent]);

  return (
    <>
      <Container margin="none">
        <Headings.H2>
          떠나고 싶은 <Text.Accented>지역</Text.Accented>은?
        </Headings.H2>
      </Container>
      <Container className={cx('globe-wrap')} margin="none">
        <RotatingGlobe />
      </Container>
      <ContinentList selectedContinent={selectedContinent} action={setSelectedContinent} />
      <Container margin="none">
        <AnimatedButton
          withBorder={true}
          onClick={() => onNext({ continent: CONTINENTS[selectedContinent]['id'] as ContinentKeys })}
          className={cx('submit-button')}
        >
          <Container margin="none" className={cx('flex', 'submit-button')}>
            "{selectedContinentName?.name}"{selectedContinentName?.name === '유럽' ? '으' : null}로 보기 <Icon />
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
}
