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
} from 'react-native';
import Home from './Components/home';
import Controller from './Components/controller';
import Store from './Components/store';
import Cart from './Components/cart';
export default class App extends Component {

    render() {
        return (
           <Cart/>
        );
    }
}

const styles = StyleSheet.create({
    
});
