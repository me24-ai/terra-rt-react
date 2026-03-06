import { NativeModules, Platform } from 'react-native';
export * from './types';
export * from './enums';
export { BLWidget } from './BLWidget';
const LINKING_ERROR = `The package 'react-native-terra-rt-react' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const TerraRtReact = NativeModules.TerraRtReact ? NativeModules.TerraRtReact : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function initTerra(devId, referenceId) {
  return TerraRtReact.initTerra(devId, referenceId);
}
export function initConnection(token) {
  return TerraRtReact.initConnection(token);
}
export function getUserId() {
  return TerraRtReact.getUserId();
}
export function startDeviceScan(connections) {
  let useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let showWidgetIfCacheNotFound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return TerraRtReact.startDeviceScan(connections, useCache, showWidgetIfCacheNotFound);
}
export function startDeviceScanWithCallback(connections) {
  if (Platform.OS === 'ios') {
    console.log('Using Bluetooth scan with callback on iOS');
    return TerraRtReact.startBluetoothScan(connections);
  } else {
    return TerraRtReact.startDeviceScanWithCallback(connections);
  }
}
export function connectDevice(device) {
  return TerraRtReact.connectDevice(device.id);
}
export function getConnectedDevice() {
  if (typeof TerraRtReact.getConnectedDevice !== 'function') {
    return Promise.resolve({
      success: false,
      error: 'getConnectedDevice not implemented on this platform',
      device: null
    });
  }
  return TerraRtReact.getConnectedDevice();
}
export function startRealtime(connections, dataTypes) {
  let token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return TerraRtReact.startRealtime(connections, dataTypes, token);
}
export function stopRealtime(connections) {
  return TerraRtReact.stopRealtime(connections);
}
export function disconnect(connections) {
  return TerraRtReact.disconnect(connections);
}
export function connectWithWatchOS() {
  return TerraRtReact.connectWithWatchOS();
}
export function startWatchApp() {
  return TerraRtReact.startWatchApp();
}
export function configureWorkoutSessionMirroringStartHandler() {
  return TerraRtReact.configureWorkoutSessionMirroringStartHandler();
}
export function getLastMirroredWorkoutStart() {
  return TerraRtReact.getLastMirroredWorkoutStart();
}
//# sourceMappingURL=index.js.map