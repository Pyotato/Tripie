'use client';
import { Chip, Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Style from './shared/selected-list.module.scss';

import PREFERENCE_LIST from 'constants/preferences';
import RESOURCE from 'constants/resources';

import NextButton from 'shared/components/Button/Animated';
import Icon from 'shared/components/Icon/Icon';
import { SELECTED_PREFERENCE } from './constants/selected';

const cx = classNames.bind(Style);

const TravelStyleSelect = () => {
  return (
    <Container margin="none">
      <Container margin="none">
        <Container className={cx('wrap')} applyMargin="bottom">
          {Object.values(PREFERENCE_LIST).map((tagName, index) => (
            <Chip
              key={tagName.tag}
              className={cx('button-chip')}
              selected={new Set(SELECTED_PREFERENCE).has(
                Object.keys(PREFERENCE_LIST)[index] as keyof typeof PREFERENCE_LIST
              )}
            >
              {tagName.tag}
            </Chip>
          ))}
        </Container>
      </Container>

      <NextButton>
        다음 <Icon src={RESOURCE.ARROW} />
      </NextButton>
    </Container>
  );
};

export default TravelStyleSelect;
