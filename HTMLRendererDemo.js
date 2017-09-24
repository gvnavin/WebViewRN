/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { htmlstr } from "./htmlcontent";

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

const htmlQuestion = `
<div id="questionblock_1">
    <p id="question_1">1. Let $z$ be a complex number such that the imaginary part of $z$ is non-zero and
        $a=z^2+z+1$ is real. Then $a$ cannot take the value",</p>
    <div id="option0_1">Option 0: -1</div>
    <div id="option1_1">Option 1: $\frac{1}{3}$</div>
    <div id="option2_1">Option 2: $\frac{1}{2}$</div>
    <div id="option3_1">Option 3: $\frac{3}{4}$</div>
    <br/>
    <div>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    </div>
</div>
`

class HTMLRendererDemo extends Component {
    render () {
        return (
            <ScrollView style={{ flex: 1 }}>
                <HTML html={htmlQuestion} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        );
    }
};


export default HTMLRendererDemo;