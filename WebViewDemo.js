/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { WebView } from 'react-native';

import { htmlstr } from "./htmlcontent";

class WebViewDemo extends Component {
    render() {
        console.log("Navin")
        console.log(htmlstr)
        //console.log(modalStr)
        //console.log(singleelement)
        return (
            <WebView scalesPageToFit={true} source={{ html: htmlstr }} />
        );
    }
}

export default WebViewDemo;