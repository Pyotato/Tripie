import { AnimatedButton, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Icon from 'shared/components/Icon/Icon';

import PREFERENCE_LIST from 'constants/preferences';
import RESOURCE from 'constants/resources';
import { ContinentKeys } from 'models/Continent';
import { useCallback, useState } from 'react';
import PreferenceList from './PreferenceList';
import Style from './preference.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion: string;
    preference?: string;
  };
  onNext: (preference: string) => void;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const PreferenceStep = ({ context, onNext }: Props) => {
  const [selected, setSelected] = useState<Array<Preference> | []>(
    context?.preference == null ? [] : (context.preference.split(',') as Array<Preference>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

  return (
    <>
      <TripieContainer margin="none">
        <TripieContainer margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </TripieContainer>
        <h2>
          내가 선호하는 여행 <span className={cx('accented')}>스타일</span>은?
        </h2>
      </TripieContainer>
      <TripieContainer className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}

        <Icon.Plane />
      </TripieContainer>
      <PreferenceList selected={selected} setSelected={setSelected} />
      <TripieContainer margin="l" applyMargin="top">
        <AnimatedButton
          withBorder={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <TripieContainer margin="none" className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon src={RESOURCE.ARROW} />
              </>
            )}
          </TripieContainer>
        </AnimatedButton>
      </TripieContainer>
    </>
  );
};

export default PreferenceStep;
