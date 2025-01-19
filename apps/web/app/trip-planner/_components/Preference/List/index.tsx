import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import PREFERENCE_LIST from 'constants/preferences';
import { ContinentKeys } from 'models/Continent';
import { Dispatch, SetStateAction } from 'react';
import Chip from 'shared/components/Chip/Chip';
import Icon from 'shared/components/Icon/Icon';
import { Preference } from '..';
import Style from './preference-list.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion?: string;
  };
  selected: Array<Preference> | [];
  setSelected: Dispatch<SetStateAction<Array<Preference> | []>>;
}

const PreferenceList = ({ selected, setSelected, context }: Props) => {
  console.log('PreferenceList context', context);
  // 여행 스타일 취향 선택
  const handleSelect = (index: number) => {
    // 이미 선택한 항목이면 제거하기
    if (new Set(selected).has(Object.keys(PREFERENCE_LIST)[index] as keyof typeof PREFERENCE_LIST)) {
      const filtered = selected.filter(item => item !== Object.keys(PREFERENCE_LIST)[index]);
      setSelected(filtered);
    } else {
      // 다중 선택이 가능하므로 이전 선택한 항목 + 새로 추가한 항목으로 state 설정
      setSelected([...new Set([...selected, Object.keys(PREFERENCE_LIST)[index]].flat())] as Array<
        keyof typeof PREFERENCE_LIST
      >);
    }
  };

  return (
    <Container margin="none">
      <Icon.Refresh onTapStart={() => setSelected([])} />{' '}
      <Container className={cx('chip-wrap')} margin="none">
        {Object.values(PREFERENCE_LIST).map((tagName, index) => (
          <Chip
            key={tagName.tag}
            className={cx('chip')}
            selected={new Set(selected).has(Object.keys(PREFERENCE_LIST)[index] as keyof typeof PREFERENCE_LIST)}
            onClick={() => handleSelect(index)}
          >
            {tagName.tag}
          </Chip>
        ))}
      </Container>
    </Container>
  );
};

export default PreferenceList;
