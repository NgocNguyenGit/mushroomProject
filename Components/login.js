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
    ScrollView,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

import {
    Footer,
    FooterTab,
    Button,
    Container,
    Icon
} from 'native-base';

// import Home from './Components/home';
// import Controller from './Components/controller';
//import Notification from './Components/notification';
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>LOG IN</Text>
            </View>
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


export default class Login extends Component {
    render() {
        return (
            // <Home/>
            // <Controller/>
            //<Notification/>
            <Container>
                <ScrollView>
                    <KeyboardAvoidingView behavior='padding' style={styles.container}>
                        <View style={styles.container}>
                            <Header />
                            <View>
                                <View style={styles.card}>
                                    <View>
                                        <Text style={styles.cardHeader}>Username</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Username'
                                            placeholderTextColor='#00778D'
                                            keyboardType='email-address'
                                            returnKeyType='next'
                                            autoCorrect={false}
                                            onSubmitEditing={() => this.refs.txtPassword.focus()}
                                        />
                                    </View>

                                    <View>
                                        <Text style={styles.cardHeader}>Password</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Password'
                                            placeholderTextColor='#00778D'
                                            returnKeyType='go'
                                            autoCorrect={false}
                                            secureTextEntry={true}
                                            ref={"txtPassword"}
                                        />
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity>
                                <Text style={styles.text}>Scan QR Code?</Text>
                            </TouchableOpacity>

                            <ButtonRounded buttonName='Log in' />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <StickyFooter />
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
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Platform.select({
            ios: 20,
            android: 0
        }),
        ...Platform.select({
            ios: {
                marginTop: 150
            },
            android: {
                marginTop: 80
            }
        })
    },
    headerText: {
        fontSize: 36,
        color: '#00778D',
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        marginHorizontal: 15
    },
    cardHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 10,
        color: '#00778D'
    },
    input: {
        borderColor: '#12BBDA',
        borderRadius: 10,
        borderWidth: 2,
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 10
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
    text: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#8D4102',
        marginVertical: 10
    },
    icon: {
        fontSize: 20,
        ...Platform.select({
            ios: {
                color: '#000000'
            },
            android: {
                color: '#ffffff'
            }
        })
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
