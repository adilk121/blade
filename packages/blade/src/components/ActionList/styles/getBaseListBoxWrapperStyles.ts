import type { CSSObject } from 'styled-components';
import type { Theme } from '~components/BladeProvider';
import { makeSize } from '~utils';

const getBaseListBoxWrapperStyles = (props: {
  theme: Theme;
  isInBottomSheet: boolean;
}): CSSObject => {
  return {
    maxHeight: props.isInBottomSheet ? undefined : makeSize(300),
    padding: props.isInBottomSheet ? undefined : makeSize(props.theme.spacing[3]),
  };
};

export { getBaseListBoxWrapperStyles };
