/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    WebView
} from 'react-native';
import { modalStr } from "./modalhtml";

class WebViewModalDemo extends Component {
    render() {
        console.log("Navin")
        //console.log(htmlstr)
        console.log(modalStr)
        //console.log(singleelement)
        return (
            <WebView scalesPageToFit={true} source={{ html: modalStr }} />
        );
    }
};

export default WebViewModalDemo;