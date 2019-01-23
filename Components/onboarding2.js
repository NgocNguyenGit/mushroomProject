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
    ScrollView
} from 'react-native';

import {
    Container
} from 'native-base';



class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.iconAlign}>
                    <View style={{ alignItems: 'flex-end', paddingHorizontal: 20 }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#12BBDA' }}>SKIP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

class StickyFooter extends Component {
    render() {
        return (
            <View style={{ bottom: 0, right: 0, left: 0, position: 'absolute', height: 50 }}>

            </View>
        );
    }
}
export default class Onboarding2 extends Component {

    render() {
        return (
            //<Login_qr/>
            //<Login/>
            //<Controller />
            //<Notification />
            //<Home/>
            <Container>
                <ScrollView>
                    <View style={styles.container}>
                        <Header />
                        <View style={styles.onBoardContent}>
                            <View style={styles.titleAlign}>
                                <Text style={styles.title}>
                                    Tell us your type of mushroom
                                </Text>
                                <Text style={styles.subTitle}>
                                    And we will manage their growing condition for you
                                </Text>
                                <Image style={{marginVertical: 20, marginHorizontal: 70}}source={require('../src/img/on2.png')}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <StickyFooter />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height: 80,
        marginBottom: Platform.select({
            ios: 20,
            android: 0
        }),
        ...Platform.select({
            ios: {
                marginTop: 10
            },
            android: {
                marginTop: 10
            }
        })
    },
    icon: {
        width: 24,
        height: 24
    },
    iconAlign: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 50,
        marginRight: 10,
        ...Platform.select({
            android: {
                marginTop: 10,
            }
        })
    },
    onBoardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:50
    },
    titleAlign: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#707070'
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 20,
        color: '#707070'
    }
});
