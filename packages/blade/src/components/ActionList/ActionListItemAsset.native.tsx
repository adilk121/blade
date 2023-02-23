import { Image } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { componentIds } from './componentIds';
import type { WithComponentId } from '~utils';
import sizes from '~tokens/global/sizes';

type ActionListItemAssetProps = {
  /**
   * Source of the image.
   *
   * Can either be a string URI or `require('/local/image')` in React Native
   */
  src: string | ImageSourcePropType;
  /**
   * Alt tag for the image
   */
  alt: string;
};
/**
 *
 */
const ActionListItemAsset: WithComponentId<ActionListItemAssetProps> = (props) => {
  const source = typeof props.src === 'string' ? { uri: props.src } : props.src;

  return (
    <Image
      source={source}
      style={{ width: sizes[400], height: sizes[300] }}
      accessibilityIgnoresInvertColors
      // @ts-expect-error: alt does exist on React Native Image https://reactnative.dev/docs/image#alt
      alt={props.alt}
    />
  );
};

ActionListItemAsset.componentId = componentIds.ActionListItemAsset;

export { ActionListItemAsset, ActionListItemAssetProps };
