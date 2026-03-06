import type { ViewProps } from 'react-native';
import type { HostComponent } from 'react-native';
import type { DirectEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
export interface SuccessfulConnectionEvent {
    success: boolean;
}
export interface NativeProps extends ViewProps {
    withCache?: boolean;
    onSuccessfulConnection?: DirectEventHandler<SuccessfulConnectionEvent>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=BLWidgetNativeComponent.d.ts.map