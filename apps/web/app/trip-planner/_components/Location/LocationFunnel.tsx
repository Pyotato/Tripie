import useFunnel from 'hooks/useFunnel';
import { ContinentKeys } from 'models/Continent';
import CityFunnel from './Cities';
import { ContinentStep } from './Continents';
import { CountryStep } from './Countries';

interface Props {
  mainContext: {
    continent?: ContinentKeys;
    country?: string;
    city?: { all: string[]; selected: string[] };
    duration?: string;
  };
  onNext: (b: string) => void;
}

export function LocationFunnel({ onNext }: Props) {
  const funnel = useFunnel<{
    CONTINENT: { continent?: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
    COUNTRY: { continent: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
    CITY: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
  }>({
    id: 'location',
    initial: {
      step: 'CONTINENT',
      context: {},
    },
  });

  return (
    <funnel.Render
      CONTINENT={({ context, history }) => (
        <ContinentStep
          context={context}
          continent={context.continent == null ? 'ALL' : context.continent}
          onNext={(selected: { continent?: ContinentKeys }) => {
            history.push('COUNTRY', selected);
          }}
        />
      )}
      COUNTRY={({ context, history }) => (
        <CountryStep
          onNext={(selected: {
            continent?: ContinentKeys;
            country?: string;
            city?: { all: string[]; selected: string[] };
            duration?: string;
          }) => {
            history.push('CITY', { ...context, ...selected });
          }}
          context={context}
        />
      )}
      CITY={({ context }) => (
        <CityFunnel
          onNext={(selected: string[]) => {
            onNext(JSON.stringify({ ...context, city: { ...context.city, selected } }));
          }}
          context={context}
        />
      )}
    />
  );
}
