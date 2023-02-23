import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const TriangleIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.43502 3.34133C9.97887 2.44475 10.9514 1.89722 12 1.89722C13.0486 1.89722 14.0212 2.44475 14.565 3.34133L14.5679 3.34608L23.0379 17.4861L23.046 17.4999C23.5791 18.423 23.5822 19.5596 23.0544 20.4857C22.5265 21.4118 21.5469 21.9882 20.481 21.9999L20.47 22L3.51903 22C2.45315 21.9882 1.47353 21.4118 0.94567 20.4857C0.41781 19.5596 0.420993 18.423 0.95403 17.4999L0.962153 17.4861L9.43502 3.34133ZM11.1462 4.3766L2.6827 18.5058C2.50833 18.8125 2.50837 19.1885 2.68322 19.4953C2.85842 19.8026 3.1829 19.9945 3.53642 20H20.4636C20.8171 19.9945 21.1416 19.8026 21.3168 19.4953C21.4917 19.1885 21.4917 18.8125 21.3174 18.5058L12.855 4.37859C12.8546 4.37792 12.8542 4.37726 12.8538 4.3766C12.6723 4.07892 12.3488 3.89722 12 3.89722C11.6513 3.89722 11.3277 4.07892 11.1462 4.3766Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default TriangleIcon;
