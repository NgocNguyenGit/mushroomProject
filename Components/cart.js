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
   Animated,
   Dimensions,
   SafeAreaView,
   StatusBar,
   TextInput
} from 'react-native';

import {
   Left,
   Body,
   Right,
   Footer,
   FooterTab,
   Button,
   Container,
   Icon,

} from 'native-base';
import StarRating from 'react-native-star-rating';

export default class Cart extends Component {
   render() {
       return (
           <View>
               <Text>Shopping Cart</Text>
           </View>
       );
   }
}

const styles = StyleSheet.create({
  
});
