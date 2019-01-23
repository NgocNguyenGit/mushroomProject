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
    TextInput
} from 'react-native';

import {
    ListItem,
    Left,
    Body,
    Right,
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
                        <Image style={styles.icon} source={require('../src/img/bell.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headerText}>CONTROLLER</Text>
                </View>
            </View>
        );
    }
}

class ButtonRounded extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', paddingBottom: 20, paddingTop: 20 }}>
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
                    <Button vertical>
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

class Condition extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 15, paddingBottom: 15 }}>
                <Image style={styles.conditionImg} source={this.props.source} />
                <Slider onValueChange={(val) => {
                    this.setState({ value: val });
                }} value={this.state.value} step={1} minimumValue={0} maximumValue={100} style={styles.slider} />
                <TextInput value={`${this.state.value}`} style={styles.textInput} />
            </View>
        );
    }
}


export default class Controller extends Component {

    render() {
        return (
            // <Home/>
            <Container>
                <ScrollView>
                    <View style={styles.container}>
                        <Header />

                        <View style={[styles.card, { alignItems: 'center', backgroundColor: '#ffffff' }]}>
                            <Image style={{ width: 160, height: 160, marginTop: 20 }} source={require('../src/img/chart.png')} />
                            <ButtonRounded buttonName='Star growing' />
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.cardHeader}>Condition</Text>
                            <Condition source={require('../src/img/light.png')} value={50} />
                            <Condition source={require('../src/img/humidity.png')} value={50} />
                            <Condition source={require('../src/img/temperature.png')} value={50} />
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.cardHeader}>Report</Text>
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
    headerText: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: Platform.select({
            ios: 5
        }),
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
    card: {
        backgroundColor: '#FFE3CA',
        borderRadius: 25,
        margin: 10
    },
    cardHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        color: '#000000'
    },
    buttonRounded: {
        borderRadius: 50,
        backgroundColor: '#12BBDA',
        padding: 10,
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
    conditionImg: {
        width: 40,
        height: 40
    },
    slider: {
        width: 200,
        marginLeft: 10,
        marginRight: 10
    },
    textInput: {
        width: 50,
        height: 35,
        borderColor: '#12BBDA',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
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
