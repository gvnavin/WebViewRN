import WebViewDemo from './WebViewDemo'
import WebViewModalDemo from './WebViewModalDemo'
import HTMLRendererDemo from './HTMLRendererDemo'
import { TabNavigator } from 'react-navigation'

import { AppRegistry } from 'react-native';

const WebViewRN = TabNavigator(
    {
        WebViewDemo: { screen: WebViewDemo },
        WebViewModalDemo: { screen: WebViewModalDemo },
        HTMLRendererDemo: { screen: HTMLRendererDemo }
    }
);


AppRegistry.registerComponent('WebViewRN', () => WebViewRN);
