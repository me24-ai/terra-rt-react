import React from 'react';
import type { ViewProps } from 'react-native';
export interface SuccessfulConnectionEvent {
    success: boolean;
}
export interface BLWidgetProps extends ViewProps {
    withCache?: boolean;
    onSuccessfulConnection?: (event: {
        nativeEvent: SuccessfulConnectionEvent;
    }) => void;
}
export declare function BLWidget(props: BLWidgetProps): React.JSX.Element | null;
//# sourceMappingURL=BLWidget.d.ts.map