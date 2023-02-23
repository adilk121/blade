import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const ChevronsLeftIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7071 7.70711C12.0976 7.31658 12.0976 6.68342 11.7071 6.29289C11.3166 5.90237 10.6834 5.90237 10.2929 6.29289L5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071L10.2929 17.7071C10.6834 18.0976 11.3166 18.0976 11.7071 17.7071C12.0976 17.3166 12.0976 16.6834 11.7071 16.2929L7.41421 12L11.7071 7.70711ZM18.7071 7.70711C19.0976 7.31658 19.0976 6.68342 18.7071 6.29289C18.3166 5.90237 17.6834 5.90237 17.2929 6.29289L12.2929 11.2929C11.9024 11.6834 11.9024 12.3166 12.2929 12.7071L17.2929 17.7071C17.6834 18.0976 18.3166 18.0976 18.7071 17.7071C19.0976 17.3166 19.0976 16.6834 18.7071 16.2929L14.4142 12L18.7071 7.70711Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default ChevronsLeftIcon;
