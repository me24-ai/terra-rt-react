import React from 'react';
import { requireNativeComponent, Platform, View } from 'react-native';
const NativeBLWidget = Platform.OS === 'ios' ? requireNativeComponent('BLWidget') : View;
export function BLWidget(props) {
  if (Platform.OS !== 'ios') {
    return null;
  }
  return /*#__PURE__*/React.createElement(NativeBLWidget, props);
}
//# sourceMappingURL=BLWidget.js.map