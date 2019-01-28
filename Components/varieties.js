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
    Dimensions,
    SafeAreaView,
    Animated,
    PanResponder

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

const Users = [
    { id: "1", uri: require('../src/img/varieties/beech.jpg') },
    { id: "2", uri: require('../src/img/varieties/crimini.jpg') },
    { id: "3", uri: require('../src/img/varieties/enoki.jpg') },
    { id: "4", uri: require('../src/img/varieties/maitake.jpg') },
    { id: "5", uri: require('../src/img/varieties/oyster.jpg') },
    { id: "6", uri: require('../src/img/varieties/portabella.jpg') },
    { id: "7", uri: require('../src/img/varieties/shiitake.jpg') },
    { id: "8", uri: require('../src/img/varieties/whitebutton.jpg') },
    { id: "9", uri: require('../src/img/varieties/wildmushroom.jpg') },
]

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    VARIETIES
                    </Text>
                <TouchableOpacity>
                    <Icon name="basket" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default class Varieties extends Component {
    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })

    }
    componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {

                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {

                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start()
                }
            }
        })
    }

    renderUsers = () => {

        return Users.map((item, i) => {


            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                            source={item.uri} />

                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View

                        key={item.id} style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                        }]}>
                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

                        </Animated.View>

                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                            source={item.uri} />

                    </Animated.View>
                )
            }
        }).reverse()
    }

    render() {
        return (
            <Container>
                <SafeAreaView>
                    <Header />

                    <View style={{ flex: 1 }}>
                        <View style={{ height: 60 }}>

                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderUsers()}
                        </View>
                        <View style={{ height: 60 }}>

                        </View>


                    </View>

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
