/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    TouchableOpacity,
    Image,
    ScrollView,
    Slider,
    TextInput,
    Switch
} from 'react-native';

import {
    List,
    ListItem,
    Left,
    Body,
    Right,
    Footer,
    FooterTab,
    Button,
    Container,
    Icon,
    DatePicker
} from 'native-base';

import Swiper from 'react-native-swiper';
import Onboarding1 from './Components/onboarding1';
import Onboarding2 from './Components/onboarding2';
import Onboarding3 from './Components/onboarding3';
import Onboadring4 from './Components/onboarding4';

export default class App extends Component {
    render() {
        return (
            <Swiper>
                <Onboarding1/>
                <Onboarding2/>
                <Onboarding3/>
                <Onboarding4/>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    
});

