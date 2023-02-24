import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const MenuDotsIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.07692 3.53846C6.07692 4.94042 4.94042 6.07692 3.53846 6.07692C2.13651 6.07692 1 4.94042 1 3.53846C1 2.13651 2.13651 1 3.53846 1C4.94042 1 6.07692 2.13651 6.07692 3.53846ZM6.07692 12.0002C6.07692 13.4021 4.94042 14.5386 3.53846 14.5386C2.13651 14.5386 1 13.4021 1 12.0002C1 10.5982 2.13651 9.46171 3.53846 9.46171C4.94042 9.46171 6.07692 10.5982 6.07692 12.0002ZM3.53846 22.9999C4.94042 22.9999 6.07692 21.8634 6.07692 20.4614C6.07692 19.0595 4.94042 17.923 3.53846 17.923C2.13651 17.923 1 19.0595 1 20.4614C1 21.8634 2.13651 22.9999 3.53846 22.9999ZM14.5384 3.53846C14.5384 4.94042 13.4019 6.07692 11.9999 6.07692C10.598 6.07692 9.46149 4.94042 9.46149 3.53846C9.46149 2.13651 10.598 1 11.9999 1C13.4019 1 14.5384 2.13651 14.5384 3.53846ZM11.9999 14.5386C13.4019 14.5386 14.5384 13.4021 14.5384 12.0002C14.5384 10.5982 13.4019 9.46171 11.9999 9.46171C10.598 9.46171 9.46149 10.5982 9.46149 12.0002C9.46149 13.4021 10.598 14.5386 11.9999 14.5386ZM14.5384 20.4614C14.5384 21.8634 13.4019 22.9999 11.9999 22.9999C10.598 22.9999 9.46149 21.8634 9.46149 20.4614C9.46149 19.0595 10.598 17.923 11.9999 17.923C13.4019 17.923 14.5384 19.0595 14.5384 20.4614ZM20.4614 6.07692C21.8634 6.07692 22.9999 4.94042 22.9999 3.53846C22.9999 2.13651 21.8634 1 20.4614 1C19.0595 1 17.923 2.13651 17.923 3.53846C17.923 4.94042 19.0595 6.07692 20.4614 6.07692ZM22.9999 12.0002C22.9999 13.4021 21.8634 14.5386 20.4614 14.5386C19.0595 14.5386 17.923 13.4021 17.923 12.0002C17.923 10.5982 19.0595 9.46171 20.4614 9.46171C21.8634 9.46171 22.9999 10.5982 22.9999 12.0002ZM20.4614 22.9999C21.8634 22.9999 22.9999 21.8634 22.9999 20.4614C22.9999 19.0595 21.8634 17.923 20.4614 17.923C19.0595 17.923 17.923 19.0595 17.923 20.4614C17.923 21.8634 19.0595 22.9999 20.4614 22.9999Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default MenuDotsIcon;
