import { requireNativeComponent, ViewStyle } from 'react-native';

type LibpagProps = {
  color: string;
  style: ViewStyle;
};

export const LibpagViewManager = requireNativeComponent<LibpagProps>(
'LibpagView'
);

export default LibpagViewManager;
