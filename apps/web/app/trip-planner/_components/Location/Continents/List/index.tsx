import { useQueryClient } from '@tanstack/react-query';
import { Container } from '@tripie-pyotato/design-system';
import listItem from 'app/api/firebase/getList';
import classNames from 'classnames/bind';
import { CONTINENTS } from 'constants/continents';
import useCountries from 'hooks/query/useCountries';
import { ContinentIds, ContinentKeys } from 'models/Continent';
import { Dispatch, SetStateAction } from 'react';
import Chip from 'shared/components/Chip/Chip';
import Style from './continent-list.module.scss';

const cx = classNames.bind(Style);

interface Props {
  selectedContinent: ContinentKeys;
  setSelectedContinent: Dispatch<SetStateAction<ContinentKeys>>;
}

export function ContinentList({ selectedContinent, setSelectedContinent }: Readonly<Props>) {
  const queryClient = useQueryClient();
  // 대륙 선택 버튼 클릭시 다음 퍼널 스탭으로 넘어가기 전에 미리 해당 대륙에 속한 국가들 prefetch해오기
  const prefetch = (continent: ContinentIds) => {
    queryClient.prefetchQuery({
      queryKey: useCountries.queryKey(continent),
      queryFn: () =>
        listItem('countries').then(countryList => {
          if (continent === 'ALL') {
            return countryList;
          } else {
            return countryList?.filter(country =>
              country?.continent.includes(CONTINENTS[continent as ContinentKeys].id)
            );
          }
        }),
    });
  };

  return (
    <Container className={cx('wrap')} applyMargin="bottom">
      {Object.keys(CONTINENTS).map((continent, index) => (
        <Chip
          selected={selectedContinent === continent}
          className={cx('chip')}
          key={JSON.stringify(continent)}
          onClick={() => {
            setSelectedContinent(Object.keys(CONTINENTS)[index] as ContinentKeys);
            prefetch(CONTINENTS[continent as ContinentKeys].id as ContinentIds);
          }}
        >
          {CONTINENTS[continent as ContinentKeys].name}
        </Chip>
      ))}
    </Container>
  );
}
