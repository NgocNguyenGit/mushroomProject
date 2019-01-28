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
    Dimensions,
    SafeAreaView,
    TouchableWithoutFeedback,
    Animated,
    Linking

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

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

const { height, width } = Dimensions.get('window')

var images = [
    { id: 1, src: require('../src/img/recipes_soup.jpg') },
    { id: 2, src: require('../src/img/recipes_salad.jpg') },
    { id: 3, src: require('../src/img/recipes_toast.jpg') },
]

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    RECIPES
                    </Text>
                <TouchableOpacity>
                    <Icon name="basket" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default class Recipes extends Component {


    render() {
        return (
            <Container>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header />
                    <View style = {{ justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, fontWeight:'bold', color:'#E49756'}}>More recipes</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.mushroomcouncil.com/recipes/')}>
                            <Text style={{ color: 'blue' }}>
                                The Mushroom Council - Recipes
                                </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <ScrollView style={{ flex: 1 }}>
                        {images.map(image => {
                            return (
                                <TouchableWithoutFeedback key={image.id}>
                                    <Animated.View
                                        style={{ height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 15 }}
                                    >
                                        <Image source={image.src}
                                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                                        />
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </ScrollView>
                </SafeAreaView>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 40,
        marginBottom: 0,
        ...Platform.select({
            android: {
                marginTop: 20
            }
        })
    },
    headerText: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
