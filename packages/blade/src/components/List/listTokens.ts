import type { CodeProps } from '../Typography';
import type { ListProps } from './List';
import type { TypographyPlatforms } from '~tokens/global/typography';
import type { DotNotationSpacingStringToken } from '~src/_helpers/types';
import type { SpacingValueType } from '~components/Box/BaseBox/types';
import { makeSize } from '~utils';

const listItemMarginLeft: Record<
  NonNullable<ListProps['variant'] | 'unorderedWithIcon'>,
  Record<number, DotNotationSpacingStringToken>
> = {
  unordered: {
    1: 'spacing.2',
    2: 'spacing.5',
    3: 'spacing.5',
  },
  unorderedWithIcon: {
    1: 'spacing.0',
    2: 'spacing.5',
    3: 'spacing.5',
  },
  ordered: {
    1: 'spacing.0',
    2: 'spacing.6',
    3: 'spacing.6',
  },
  'ordered-filled': {
    1: 'spacing.0',
    2: 'spacing.6',
    3: 'spacing.6',
  },
};

const listItemBulletMarginRight: Record<NonNullable<ListProps['variant']>, SpacingValueType> = {
  unordered: 'spacing.3',
  ordered: 'spacing.2',
  'ordered-filled': 'spacing.3',
};

const listItemBulletMarginTop: Record<
  NonNullable<ListProps['variant'] | 'unorderedWithIcon'>,
  Record<TypographyPlatforms, Record<NonNullable<ListProps['size']>, SpacingValueType>>
> = {
  // We need hard-coded non-tokenized spacing for bullet alignment in List
  unordered: {
    onDesktop: {
      small: makeSize(6),
      medium: 'spacing.3',
    },
    onMobile: {
      small: makeSize(6),
      medium: makeSize(10),
    },
  },
  unorderedWithIcon: {
    onDesktop: {
      small: 'spacing.2',
      medium: 'spacing.1',
    },
    onMobile: {
      small: 'spacing.2',
      medium: makeSize(6),
    },
  },
  ordered: {
    onDesktop: {
      small: makeSize(0),
      medium: makeSize(0),
    },
    onMobile: {
      small: makeSize(0),
      medium: makeSize(0),
    },
  },
  'ordered-filled': {
    // TODO: fix these
    onDesktop: {
      small: makeSize(0),
      medium: makeSize(0),
    },
    onMobile: {
      small: makeSize(0),
      medium: 'spacing.1',
    },
  },
};

const listItemUnorderedBulletSize: Record<
  TypographyPlatforms,
  Record<NonNullable<ListProps['size']>, SpacingValueType>
> = {
  // We need hard-coded non-tokenized spacing for bullet alignment in List
  onDesktop: {
    small: '6px',
    medium: '6px',
  },
  onMobile: {
    small: '5px',
    medium: '6px',
  },
};

const listItemMarginBottom: DotNotationSpacingStringToken = 'spacing.3';

const ComponentIds = {
  List: 'List',
  ListItem: 'ListItem',
};

const listItemOrderedBulletBoxSize: Record<
  string,
  Record<TypographyPlatforms, Record<NonNullable<ListProps['size']>, SpacingValueType>>
> = {
  // We need hard-coded non-tokenized box sizes for bullet alignment in List
  ordered: {
    onDesktop: {
      small: '16px',
      medium: '20px',
    },
    onMobile: {
      small: '16px',
      medium: '24px',
    },
  },
  'ordered-filled': {
    onDesktop: {
      small: '18px',
      medium: '20px',
    },
    onMobile: {
      small: '16px',
      medium: '20px',
    },
  },
};

const listItemCodeSize: Record<NonNullable<ListProps['size']>, NonNullable<CodeProps['size']>> = {
  small: 'small',
  medium: 'small',
};

export {
  listItemMarginLeft,
  ComponentIds,
  listItemMarginBottom,
  listItemBulletMarginRight,
  listItemBulletMarginTop,
  listItemUnorderedBulletSize,
  listItemOrderedBulletBoxSize,
  listItemCodeSize,
};