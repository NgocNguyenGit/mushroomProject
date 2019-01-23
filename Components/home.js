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
    StatusBar
} from 'react-native';

import {
    Container,
    Icon,

} from 'native-base';

import StarRating from 'react-native-star-rating';


const { height, width } = Dimensions.get('window')

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" style={{ color: '#FFFFFF' }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    HOME
                    </Text>
                <TouchableOpacity>
                    <Icon name="basket" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
            </View>
        );
    }
}

class Product extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5, marginHorizontal: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={this.props.imageUri} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>{this.props.type}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.price}</Text>
                    <StarRating
                        disable={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                        fullStarColor='#FF8E2F'
                    />
                </View>
            </View>
        );
    }
}

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', backgroundColor:'#ffffff', borderRadius: 5 }}>
                <View style={{ flex: 2}}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:5  }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

class HashTag extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column', alignItems:'center',justifyContent:'center'}}>
                <View style={{ backgroundColor: '#FF8E2F', borderRadius: 50, width: 90, height: 90, alignItems:'center', justifyContent:'center' }}>
                    <Text style={{fontSize:28, fontWeight:'bold', color:'#ffffff'}}>{this.props.name}</Text>
                </View>
                <Text style = {{paddingTop: 10}}>{this.props.text}</Text>
            </View>
        )
    }
}

export default class Home extends Component {
    render() {
        return (
            <Container>
                <SafeAreaView>
                    <Header />
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={[styles.card, {backgroundColor: '#A4EFFD'}]}>    
                                <Text style={styles.cardHeader}>Store</Text>
                                <View style={{ height: 130, marginBottom: 20 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <Category imageUri={require('../src/img/store/white.jpg')}
                                            name="Controller"
                                        />
                                        <Category imageUri={require('../src/img/store/kit3.jpg')}
                                            name="Kit"
                                        />
                                        <Category imageUri={require('../src/img/store/spawn.jpg')}
                                            name="Spawn"
                                        />
                                    </ScrollView>
                                </View>
                
                            </View>

                            <View style={styles.card}>
                                <Text style={styles.cardHeader}>Mushroom 101</Text>
                                <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }}>
                                    <HashTag name="#H" text="How-to" />
                                    <HashTag name="#R" text="Recipes" />
                                    <HashTag name="#V" text="Varieties" />
                                </View>
                            </View>


                            <View style={styles.card}>
                                <Text style={styles.cardHeader}>TOP 3 interesting things for today!</Text>
                                <View style={{ marginVertical: 5, paddingHorizontal: 20 }}>
                                    <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                        Oyster Mushrooms have a wide variety of health benefits as well as a rich and fascinating history! Check out this article for a myriad of fun facts and even some recipes. http://ow.ly/7zso30jtXNP
                                    </Text>

                                    <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                                        <Image
                                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                            source={require('../src/img/funfact.jpg')}
                                        />

                                    </View>
                                    <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-evenly' }}>
                                        <Product width={width}
                                            name="My Remote Farm"
                                            type="CONTROLLER - VERSION 1"
                                            price="30$"
                                            rating={4}
                                            imageUri={require('../src/img/store/white.jpg')}
                                        />
                                        <Product width={width}
                                            name="Easy Mushroom Soup"
                                            type="RECIPE"
                                            price="Level: Beginner"
                                            rating={4}
                                            imageUri={require('../src/img/soup.jpg')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
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
    },

    card: {
        backgroundColor: '#ffffff',
        marginVertical: 10
    },
    cardHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        color: '#000000'
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#12BBDA',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    buttonImg: {
        width: 35,
        height: 35
    },
    buttonSelfAlign: {
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                paddingBottom: 20
            },
            android: {
                paddingBottom: 20
            }
        })
    },
    buttonAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
    thumbnail: {
        width: 40,
        height: 40,
        backgroundColor: '#00778D'
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
