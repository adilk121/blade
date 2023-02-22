import type { StyledProps } from './BaseBox';

/**
 * This utility takes all your props and returns only the styled props that are to be used on components
 *
 * ### Usage
 *
 * ```tsx
 * import type { StyledProps } from '~src/components/Box/BaseBox';
 * import { getStyledProps } from '~src/components/Box/BaseBox';
 *
 * const MyComponent = (props: MyComponentProps & StyledProps) => {
 *  return (
 *    <BaseBox {...getStyledProps(props)}>
 *      // Your component code
 *    </BaseBox>
 *  )
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStyledProps = (props: Record<string, any>): Required<StyledProps> => {
  return {
    alignSelf: props.alignSelf,
    justifySelf: props.justifySelf,
    placeSelf: props.placeSelf,
    order: props.order,
    position: props.position,
    zIndex: props.zIndex,
    gridColumn: props.gridColumn,
    gridColumnStart: props.gridColumnStart,
    gridColumnEnd: props.gridColumnEnd,
    gridRow: props.gridRow,
    gridRowStart: props.gridRowStart,
    gridRowEnd: props.gridRowEnd,
    gridArea: props.gridArea,
    margin: props.margin,
    marginX: props.marginX,
    marginY: props.marginY,
    marginBottom: props.marginBottom,
    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
  };
};

export { getStyledProps };
