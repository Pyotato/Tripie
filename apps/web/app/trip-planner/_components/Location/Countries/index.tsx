import { useQueryClient } from '@tanstack/react-query';
import { Container } from '@tripie-pyotato/design-system';
import getContinentlList from 'app/api/firebase/getContinentl';
import Loading from 'app/home/_components/loading/loading';
import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import useContinentl from 'hooks/query/useContinentl';
import useCountries from 'hooks/query/useCountries';
import { ContinentKeys } from 'models/Continent';
import { Country } from 'models/Country';
import { useRef, useState } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Icon from 'shared/components/Icon/Icon';
import CountryDetail from './CountryDetail';
import { CountryList } from './List/CountryList';
import Style from './countries.module.scss';

interface Props {
  context: { continent: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  onNext: (country: {
    continent?: ContinentKeys;
    country?: string;
    city?: { all: string[]; selected: string[] };
    duration?: string;
  }) => void;
}

const cx = classNames.bind(Style);

export function CountryStep({ context, onNext }: Readonly<Props>) {
  const { data, isLoading } = useCountries(context.continent ?? 'all');
  const [selectedCountry, setSelectedCountry] = useState(context?.country == null ? '' : context.country);
  /** 국가 선택 시 다음으로 스크롤 */
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  // 국가 내의 도시/시 정보 가져오기
  const getCitys = (country: string) => {
    return queryClient.ensureQueryData({
      queryKey: useContinentl.queryKey(country),
      queryFn: () =>
        getContinentlList().then(countries => {
          return country === 'all' ? countries : countries?.filter(place => place.id === country);
        }),
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </Container>
        <h2>
          떠나고 싶은 <span className={cx('accented')}>나라</span>는?
        </h2>
      </Container>

      {data == null ? null : (
        <>
          {' '}
          <CountryList
            countries={data}
            bottomRef={bottomRef}
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
          <CountryDetail
            selectedCountry={
              // 선택한 나라가 없을 경우
              selectedCountry === '' || !data.some((country: Country) => country.name === selectedCountry)
                ? data[0].name
                : selectedCountry
            }
          />
          <Container margin="none">
            <AnimatedButton
              withBorder={true}
              onClick={async () => {
                const states = await getCitys(selectedCountry);
                if (states != null) {
                  onNext({ country: selectedCountry, city: { all: states?.[0]?.states, selected: [] } });
                }
              }}
              className={cx('submit-button')}
            >
              <Container margin="none" className={cx('flex')}>
                "{selectedCountry}"로 보기 <Icon src={RESOURCE.ARROW} />
              </Container>
            </AnimatedButton>
          </Container>
        </>
      )}

      <section ref={bottomRef} />
    </>
  );
}
