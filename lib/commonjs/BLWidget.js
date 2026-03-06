"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BLWidget = BLWidget;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NativeBLWidget = _reactNative.Platform.OS === 'ios' ? (0, _reactNative.requireNativeComponent)('BLWidget') : _reactNative.View;
function BLWidget(props) {
  if (_reactNative.Platform.OS !== 'ios') {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(NativeBLWidget, props);
}
//# sourceMappingURL=BLWidget.js.map