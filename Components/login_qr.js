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
    Footer,
    FooterTab,
    Button,
    Container,
    Icon
} from 'native-base';


class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.iconAlign}>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../src/img/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headerText}>LOG IN</Text>
                </View>
            </View>
        );
    }
}

class StickyFooter extends Component {
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button vertical >
                        <Icon name="home" />
                        <Text style={styles.iconText}>HOME</Text>
                    </Button>
                    <Button vertical active>
                        <Icon name="options" />
                        <Text style={styles.iconTextActive}>CONTROLLER</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
class ButtonRounded extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', paddingVertical: 20, marginVertical: 20 }}>
                <TouchableOpacity style={styles.buttonRounded}>
                    <Text style={styles.buttonRoundedText}>{this.props.buttonName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class Login_qr extends Component {

    render() {
        return (
            <Container>
                <ScrollView>
                    <View style={styles.container}>
                        <Header />
                        {/* *********************** SCAN QR CODE HERE ************************/}
                        <ButtonRounded buttonName='Log in' />
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
        height: 210,
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
    headerText: {
        fontSize: 36,
        color: '#00778D',
        fontWeight: 'bold',
        marginBottom: Platform.select({
            ios: 20,
            android: 0
        }),
        ...Platform.select({
            ios: {
                marginTop: 100
            },
            android: {
                marginTop: 80
            }
        })
    },
    icon: {
        width: 24,
        height: 24
    },
    iconAlign: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 50,
        marginLeft: 10,
        ...Platform.select({
            android: {
                marginTop: 10,
            }
        })
    },
    buttonRounded: {
        borderRadius: 50,
        backgroundColor: '#FF8E2F',
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center'
    },
    buttonRoundedText: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    iconText: {
        fontSize: 14,
        ...Platform.select({
            ios: {
                color: '#000000'
            },
            android: {
                color: '#ffffff'
            }
        })
    },
    iconActive: {
        fontSize: 20,
        ...Platform.select({
            ios: {
                color: '#3A86E0'
            },
            android: {
                color: '#ffffff',
                fontWeight: 'bold'
            }
        })
    },
    iconTextActive: {
        fontSize: 14,
        ...Platform.select({
            ios: {
                color: '#3A86E0'
            },
            android: {
                color: '#ffffff',
                fontWeight: 'bold'
            }
        })
    }
});
