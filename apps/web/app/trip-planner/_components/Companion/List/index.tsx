'use client';
import { Chip, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import COMPANION_LIST from 'constants/companions';
import { ContinentKeys } from 'models/Continent';
import { Dispatch, SetStateAction } from 'react';

import Icon from 'shared/components/Icon/Icon';
import { Companion } from '..';
import Style from './companion-list.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion?: string;
  };
  selected: Array<Companion> | [];
  setSelected: Dispatch<SetStateAction<Array<Companion> | []>>;
}

const CompanionList = ({ selected, setSelected }: Props) => {
  // 여행 일정 동반자 선택
  const handleSelect = (index: number) => {
    // 이미 선택한 경우, 선택 취소
    if (new Set(selected).has(Object.keys(COMPANION_LIST)[index] as keyof typeof COMPANION_LIST)) {
      const filtered = selected.filter(item => item !== Object.keys(COMPANION_LIST)[index]);
      setSelected(filtered);
    } else {
      // 다중선택이 가능하므로 스프레드 연산자로 이전 선택 항목에 새 항목 추가해서 선택하기
      setSelected([...new Set([...selected, Object.keys(COMPANION_LIST)[index]].flat())] as Array<
        keyof typeof COMPANION_LIST
      >);
    }
  };

  return (
    <TripieContainer margin="none">
      <Icon.Refresh onTapStart={() => setSelected([])} />{' '}
      <TripieContainer className={cx('chip-wrap')} margin="none">
        {Object.values(COMPANION_LIST).map((tagName, index) => (
          <Chip
            key={tagName.tag}
            className={cx('chip')}
            selected={new Set(selected).has(Object.keys(COMPANION_LIST)[index] as keyof typeof COMPANION_LIST)}
            onClick={() => handleSelect(index)}
          >
            {tagName.tag}
          </Chip>
        ))}
      </TripieContainer>
    </TripieContainer>
  );
};

export default CompanionList;
