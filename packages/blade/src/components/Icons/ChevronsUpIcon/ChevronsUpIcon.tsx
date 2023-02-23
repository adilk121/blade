import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const ChevronsUpIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071C6.68342 12.0976 7.31658 12.0976 7.70711 11.7071L12 7.41421L16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929L12.7071 5.29289Z"
        fill={iconColor}
      />
      <Path
        d="M17.7071 17.2929L12.7071 12.2929C12.3166 11.9024 11.6834 11.9024 11.2929 12.2929L6.29289 17.2929C5.90237 17.6834 5.90237 18.3166 6.29289 18.7071C6.68342 19.0976 7.31658 19.0976 7.70711 18.7071L12 14.4142L16.2929 18.7071C16.6834 19.0976 17.3166 19.0976 17.7071 18.7071C18.0976 18.3166 18.0976 17.6834 17.7071 17.2929Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default ChevronsUpIcon;
