"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  initTerra: true,
  initConnection: true,
  getUserId: true,
  startDeviceScan: true,
  startDeviceScanWithCallback: true,
  connectDevice: true,
  getConnectedDevice: true,
  startRealtime: true,
  stopRealtime: true,
  disconnect: true,
  connectWithWatchOS: true,
  startWatchApp: true,
  configureWorkoutSessionMirroringStartHandler: true,
  getLastMirroredWorkoutStart: true,
  BLWidget: true
};
Object.defineProperty(exports, "BLWidget", {
  enumerable: true,
  get: function () {
    return _BLWidget.BLWidget;
  }
});
exports.configureWorkoutSessionMirroringStartHandler = configureWorkoutSessionMirroringStartHandler;
exports.connectDevice = connectDevice;
exports.connectWithWatchOS = connectWithWatchOS;
exports.disconnect = disconnect;
exports.getConnectedDevice = getConnectedDevice;
exports.getLastMirroredWorkoutStart = getLastMirroredWorkoutStart;
exports.getUserId = getUserId;
exports.initConnection = initConnection;
exports.initTerra = initTerra;
exports.startDeviceScan = startDeviceScan;
exports.startDeviceScanWithCallback = startDeviceScanWithCallback;
exports.startRealtime = startRealtime;
exports.startWatchApp = startWatchApp;
exports.stopRealtime = stopRealtime;
var _reactNative = require("react-native");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _enums = require("./enums");
Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});
var _BLWidget = require("./BLWidget");
const LINKING_ERROR = `The package 'react-native-terra-rt-react' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const TerraRtReact = _reactNative.NativeModules.TerraRtReact ? _reactNative.NativeModules.TerraRtReact : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function initTerra(devId, referenceId) {
  return TerraRtReact.initTerra(devId, referenceId);
}
function initConnection(token) {
  return TerraRtReact.initConnection(token);
}
function getUserId() {
  return TerraRtReact.getUserId();
}
function startDeviceScan(connections) {
  let useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let showWidgetIfCacheNotFound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return TerraRtReact.startDeviceScan(connections, useCache, showWidgetIfCacheNotFound);
}
function startDeviceScanWithCallback(connections) {
  if (_reactNative.Platform.OS === 'ios') {
    console.log('Using Bluetooth scan with callback on iOS');
    return TerraRtReact.startBluetoothScan(connections);
  } else {
    return TerraRtReact.startDeviceScanWithCallback(connections);
  }
}
function connectDevice(device) {
  return TerraRtReact.connectDevice(device.id);
}
function getConnectedDevice() {
  if (typeof TerraRtReact.getConnectedDevice !== 'function') {
    return Promise.resolve({
      success: false,
      error: 'getConnectedDevice not implemented on this platform',
      device: null
    });
  }
  return TerraRtReact.getConnectedDevice();
}
function startRealtime(connections, dataTypes) {
  let token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return TerraRtReact.startRealtime(connections, dataTypes, token);
}
function stopRealtime(connections) {
  return TerraRtReact.stopRealtime(connections);
}
function disconnect(connections) {
  return TerraRtReact.disconnect(connections);
}
function connectWithWatchOS() {
  return TerraRtReact.connectWithWatchOS();
}
function startWatchApp() {
  return TerraRtReact.startWatchApp();
}
function configureWorkoutSessionMirroringStartHandler() {
  return TerraRtReact.configureWorkoutSessionMirroringStartHandler();
}
function getLastMirroredWorkoutStart() {
  return TerraRtReact.getLastMirroredWorkoutStart();
}
//# sourceMappingURL=index.js.map