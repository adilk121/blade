import type { ReactElement } from 'react';
import styled from 'styled-components/native';
import getBaseTextStyles from './getBaseTextStyles';
import type { BaseTextProps, StyledBaseTextProps } from './types';
import { metaAttribute, makeAccessible, MetaConstants, getStyledProps } from '~utils';
import { getBaseBoxStyles } from '~components/Box/BaseBox/getBaseBoxStyles';

const StyledBaseText = styled.Text<StyledBaseTextProps>(
  ({
    color,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    textDecorationLine,
    lineHeight,
    textAlign,
    as,
    ...props
  }) => {
    const styledPropsCSSObject = getBaseBoxStyles({ ...getStyledProps(props), theme: props.theme });

    if (as) {
      throw new Error(`[Blade: BaseText]: "as" prop is not supported for BaseText on React Native`);
    } else {
      return {
        ...styledPropsCSSObject,
        ...getBaseTextStyles({
          color,
          fontFamily,
          fontSize,
          fontWeight,
          fontStyle,
          textDecorationLine,
          lineHeight,
          textAlign,
          theme: props.theme,
        }),
      };
    }
  },
);

export const BaseText = ({
  id,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  textDecorationLine,
  lineHeight,
  as,
  textAlign,
  children,
  truncateAfterLines,
  className,
  style,
  accessibilityProps = {},
  componentName,
  ...styledProps
}: BaseTextProps): ReactElement => {
  return (
    <StyledBaseText
      {...styledProps}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      textDecorationLine={textDecorationLine}
      lineHeight={lineHeight}
      as={as}
      textAlign={textAlign}
      numberOfLines={truncateAfterLines}
      className={className}
      style={style}
      id={id}
      {...makeAccessible(accessibilityProps)}
      {...metaAttribute(MetaConstants.Component, componentName!)}
    >
      {children}
    </StyledBaseText>
  );
};
