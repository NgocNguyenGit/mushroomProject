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

// import Home from './Components/home';
// import Controller from './Components/controller';
/* import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'; */

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
                    <Text style={styles.headerText}>NOTIFICATION</Text>
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

export default class Notification extends Component {
    /*  constructor(props) {
         super(props);
         this.state = {
             isVisible: false,
             chosenDate: 'Choose date'
         };
 
     }
     handlePicker = (datetime) => {
         this.setState({
             isVisible: false,
             chosenDate: moment(datetime).format('HH:mm')
         })
     }
     hidePicker = () => {
         this.setState({
             isVisible: false
         })
     }
 
     showPicker = () => {
         this.setState({
             isVisible: true
         })
     } */
    state={
        switchValue: true
    };
    _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue
    }));

    render() {
        return (
            // <Home/>
            // <Controller/>
            <Container>
                <ScrollView>
                    <View style={styles.container}>
                        <Header />

                        <View style={styles.card}>
                            {/*  **************************ABOUT YOUR FARM SECTION ************************** */}
                            <List>
                                <View style={styles.listCard}>
                                    <ListItem itemDivider >
                                        <Text>YOUR FARM</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text>Daily report</Text>
                                        </Left>
                                        <Right>
                                            <Switch 
                                                onValueChange={this._handleToggleSwitch}
                                                value={this.state.switchValue}
                                            />
                                        </Right>
                                    </ListItem>

                                    {/* <ListItem>
                                        <Left>
                                            <Text>Time</Text>
                                        </Left>
                                        <Right>
                                            <TouchableOpacity onPress={this.showPicker} style={{}}>
                                                <Text>{this.state.chosenDate}</Text>
                                            </TouchableOpacity>
                                            <DateTimePicker
                                                isVisible={this.state.isVisible}
                                                onConfirm={this.handlePicker}
                                                onCancel={this.hidePicker}
                                                mode={'datetime'}
                                                datePickerModeAndroid={'spinner'}
                                                is24Hour={false}
                                            />
                                        </Right>
                                    </ListItem> */}
                                </View>
                            </List>
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
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        ...Platform.select({
            ios: {
                marginTop: 20
            },
            android: {
                marginTop: 0
            }
        })
    },
    cardHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        color: '#8D4102'
    },
    listCard: {
        marginBottom: 10
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
