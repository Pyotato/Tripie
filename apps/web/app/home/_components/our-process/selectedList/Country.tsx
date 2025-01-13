'use client';
import classNames from 'classnames/bind';
import Style from './all-info.module.scss';

import { Container } from '@tripie-pyotato/design-system';
import RESOURCE from 'constants/resources';
import useCountries from 'hooks/query/useCountries';
import { Country } from 'models/Country';
import { useMemo, useState } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Chip from 'shared/components/Chip/Chip';
import Icon from 'shared/components/Icon/Icon';
import { regionNameToLocal } from 'utils/lang';
import { SELECTED_CONTINENT_NAME, SELECTED_COUNTRY } from './constants/selected';

const cx = classNames.bind(Style);

const CountrySelect = () => {
  const { data, isLoading } = useCountries(SELECTED_CONTINENT_NAME.id);
  const [selected, setSelected] = useState<Country | null>(null);
  const countries = useMemo(() => {
    if (isLoading) {
      return [];
    }
    const selected = data.filter((item: Country) => item.name === SELECTED_COUNTRY)[0];

    setSelected(selected);
    return [...data.slice(17, 19), selected, ...data.slice(10, 14)].filter(v => v != null);
  }, [data, isLoading]);

  return isLoading || selected?.code == null ? (
    <></>
  ) : (
    <Container margin="none">
      <Container margin="none" className={cx('card-region-wrap')}>
        <Container className={cx('wrap')} applyMargin="bottom">
          {countries.map((country: Country) => (
            <Chip
              selected={SELECTED_COUNTRY === country.name}
              className={cx('chip')}
              key={JSON.stringify(country.code)}
            >
              {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
            </Chip>
          ))}
        </Container>

        <AnimatedButton.Next>
          "{regionNameToLocal({ regionCode: selected.code })}"로 보기 <Icon src={RESOURCE.ARROW} />
        </AnimatedButton.Next>
      </Container>
    </Container>
  );
};
export default CountrySelect;
