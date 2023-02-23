import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const MoonIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0812 2.50904C12.2747 2.85242 12.2484 3.27745 12.0141 3.59442C10.2487 5.98281 10.4964 9.30338 12.5965 11.4035C14.6966 13.5036 18.0172 13.7513 20.4056 11.9859C20.7225 11.7516 21.1476 11.7253 21.491 11.9188C21.8343 12.1124 22.032 12.4895 21.9957 12.882C21.5095 18.144 17.013 22.1194 11.731 21.9571C6.4491 21.7948 2.20518 17.5509 2.04288 12.269C1.88059 6.98701 5.85595 2.49054 11.118 2.00426C11.5104 1.96799 11.8876 2.16566 12.0812 2.50904ZM9.31561 4.43767C6.13442 5.587 3.93349 8.67806 4.04194 12.2075C4.17178 16.4331 7.56692 19.8282 11.7925 19.9581C15.3219 20.0665 18.413 17.8656 19.5623 14.6844C16.7077 15.7179 13.4237 15.0591 11.1823 12.8177C8.94088 10.5763 8.28206 7.2923 9.31561 4.43767Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default MoonIcon;
