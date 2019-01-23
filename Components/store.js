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

const { height, width } = Dimensions.get('window')

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    STORE
                    </Text>
                <TouchableOpacity>
                    <Icon name="basket" style={{ color: '#FF8E2F' }} />
                </TouchableOpacity>
            </View>
        );
    }
}

class SearchBar extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginHorizontal: 15,
                marginVertical: 5,
                borderColor: '#12BBDA',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center'
            }}>
                <Icon name="search" style={{ color: '#FF8E2F', marginRight: 10 }} />
                <TextInput
                    placeholder="Search your items"
                    placeholderTextColor="gray"
                />
            </View>
        );
    }
}

class Product extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5, marginRight: 10 }}>
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

export default class Store extends Component {
    render() {
        return (
            <Container>
                <SafeAreaView>
                    <Header />
                    <Animated.View>
                        <SearchBar />
                    </Animated.View>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.card}>
                                <Text style={styles.cardHeader}>Controller</Text>
                                <View style={{ height: 170, marginBottom: 5 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={{ marginHorizontal: 20, marginRight: 10, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Product width={width}
                                                name="My Remote Farm"
                                                type="CONTROLLER - VERSION 1"
                                                price="30$"
                                                rating={4}
                                                imageUri={require('../src/img/store/white.jpg')}
                                            />
                                            <Product width={width}
                                                name="My Remote Farm"
                                                type="CONTROLLER - VERSION 2"
                                                price="30$"
                                                rating={4}
                                                imageUri={require('../src/img/store/black.jpg')}
                                            />
                                            <Product width={width}
                                                name="My Remote Farm"
                                                type="CONTROLLER - VERSION 3"
                                                price="30$"
                                                rating={4}
                                                imageUri={require('../src/img/store/gray.jpg')}
                                            />
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Text style={styles.cardHeader}>Kit</Text>
                                <View style={{ height: 170, marginBottom: 5 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={{ marginHorizontal: 20, marginRight: 10, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Product width={width}
                                                name="Mushroom Garden 2-KIT"
                                                type="KIT - GROW YOUR OWN"
                                                price="35$"
                                                rating={4}
                                                imageUri={require('../src/img/store/kit1.jpg')}
                                            />
                                            <Product width={width}
                                                name="Portabella Mushroom Kit"
                                                type="KIT - GROW YOUR OWN GOURMET"
                                                price="45$"
                                                rating={5}
                                                imageUri={require('../src/img/store/kit2.jpg')}
                                            />
                                            <Product width={width}
                                                name="Mushroom Farm"
                                                type="KIT - ORGANIC"
                                                price="20$"
                                                rating={4}
                                                imageUri={require('../src/img/store/kit3.jpg')}
                                            />
                                            <Product width={width}
                                                name="KIT AUTOCULTIVO"
                                                type="KIT - STANDARD"
                                                price="15$"
                                                rating={4.5}
                                                imageUri={require('../src/img/store/kit4.jpg')}
                                            />
                                            <Product width={width}
                                                name="GROW MUSHROOMS"
                                                type="KIT - ECO PACKAGE"
                                                price="25$"
                                                rating={3.5}
                                                imageUri={require('../src/img/store/kit5.jpg')}
                                            />
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>


                            <View style={styles.card}>
                                <Text style={styles.cardHeader}>Spawn</Text>
                                <View style={{ marginVertical: 5, paddingHorizontal: 20 }}>
                                    <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                        Please contact us for reasonable price.
                                        Price may be subjected to change.
                                    </Text>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                                            <Image
                                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                                source={require('../src/img/store/wholesale.jpg')}
                                            />
                                        </View>
                                        <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                                            <Image
                                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                                source={require('../src/img/store/retail.jpg')}
                                            />
                                        </View>
                                        
                                    </ScrollView>
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
