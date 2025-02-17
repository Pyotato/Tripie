'use client';
import classNames from 'classnames/bind';
import Style from './shared/selected-list.module.scss';

import { Chip, Container, Icon } from '@tripie-pyotato/design-system';

import useCountries from 'hooks/query/useCountries';
import { Country } from 'models/Country';
import { useMemo, useState } from 'react';

import NextButton from 'shared/components/Button/Animated';
// import Icon from 'shared/components/Icon/Icon';
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
    if (data != null) {
      const selected = data.filter((item: Country) => item.name === SELECTED_COUNTRY)[0];
      setSelected(selected);
      return [...data.slice(17, 19), selected, ...data.slice(10, 14)].filter(v => v != null);
    }
    return [];
  }, [data, isLoading]);

  return isLoading || selected?.code == null ? (
    <></>
  ) : (
    <Container margin="none">
      <Container className={cx('wrap')} applyMargin="bottom">
        {countries.map((country: Country) => (
          <Chip
            selected={SELECTED_COUNTRY === country.name}
            className={cx('button-chip')}
            key={JSON.stringify(country.code)}
          >
            {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
          </Chip>
        ))}
      </Container>

      <NextButton>
        "{regionNameToLocal({ regionCode: selected.code })}"로 보기 <Icon />
        {/* <Icon src={RESOURCE.ARROW} /> */}
      </NextButton>
    </Container>
  );
};
export default CountrySelect;
