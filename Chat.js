import * as React from 'react';
import {
    Image,
    Text,
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TextInput,
    Dimensions,
    StatusBar,
    Button,
    TouchableHighlight,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Component, useState} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';
import {Actions} from 'react-native-router-flux';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const {height, width} = Dimensions.get('window');
// var {width,height} = Dimensions.get('window');

type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class Chat extends Component {
    constructor(props: Props) {
        super(props);

        this.state = {
            listData: [],
        };
    }

    _pressRow() {
        Actions.userhome();
    }

    render() {
        const MESSAGES = [
            {
                id: '1',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '10月16日',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '2',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '3',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '4',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },

            {
                id: '5',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '10月16日',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '6',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '7',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '8',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },

            {
                id: '9',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '10',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '11',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },

            {
                id: '12',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '13',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
            {
                id: '14',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
            },
        ];

        const Item = ({item}) => (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this._pressRow({id: item.id})}>
                    <Image
                        onPress={() => {
                            Actions.userhome();
                        }}
                        source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}}
                        style={styles.thumbnail}
                    />
                </TouchableHighlight>
                {/*(item.id) ?(<View>):*/}
                {/*(<View style={styles.rightContainer}>)*/}
                <View style={styles.rightContainer}>
                    {/*<Text style={styles.name}>小王</Text>*/}
                    <Text
                        style={styles.message}>需求：由主页MainScreen跳转到站内信页面MessageScreen，在MessageScreen存在自定义的TitleBar和3个Tab布局。</Text>
                </View>
            </View>
        );

        // const [text, setText] = useState('');

        const text = '请输入22';

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={MESSAGES}
                    renderItem={({item, index}) => {
                        if (index % 2 == 0) {
                            return (
                                <View style={styles.container}>
                                    <Image
                                        source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}}
                                        style={styles.thumbnail}
                                    />
                                    <View style={styles.rightContainer}>
                                        <Text style={styles.name}>{item.id}小王</Text>
                                        <Text
                                            style={styles.message}>需求：由主页MainScreen跳转到站内信页面MessageScreen，在MessageScreen存在自定义的TitleBar和3个Tab布局。</Text>
                                    </View>
                                </View>
                            );
                        }
                        return (
                            <View style={myself_styles.container}>

                                <View style={myself_styles.rightContainer}>
                                    <Text style={myself_styles.name}>小王2</Text>
                                    <Text
                                        style={myself_styles.message}>4444需求：由主页MainScreen跳转到站内信页面MessageScreen，在MessageScreen存在自定义的TitleBar和3个Tab布局。</Text>
                                </View>
                                <Image
                                    source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}}
                                    style={myself_styles.thumbnail}
                                />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
                <View style={{
                    position: 'absolute',
                    width: width,
                    bottom: 0,
                    left: 0,
                    // zIndex: 50,
                    backgroundColor: '#e2e2e2',//'#e2e2e2',
                }}>
                    <View style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 10,
                        flex: 1,
                        flexDirection: 'row',

                    }}>
                        <Fontisto name="smiley" size={30} color="black"
                                  style={{
                                      height: 30,
                                      width: 35,
                                  }}
                        />
                        <MaterialCommunityIcons name="plus-circle-outline" size={35} color="black"
                                                style={{
                                                    height: 35,
                                                    width: 35,
                                                    bottom:4,
                                                }}
                        />
                    </View>
                    <TextInput
                        style={styles._input}
                        placeholder=""
                        // onChangeText={text => setText(text)}
                        // defaultValue={text}
                    />
                    {/*<Text style={{padding: 10, fontSize: 15}}>*/}
                    {/*    {text}*/}
                    {/*</Text>*/}
                </View>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingTop: 10,
        // paddingBottom: 20,
    },
    rightContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight:70,
        // borderBottomWidth: 1,
        backgroundColor: 'white',
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        padding:10,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
    },
    date: {
        position: 'absolute',
        top: 10,
        right: 15,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius:5,
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    _input: {
        height: 40,
        width: width * 0.8,
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 50,
        /*  alignSelf:'center',*/
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        fontSize: 20,
    },
});

const myself_styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingTop: 10,
        // paddingBottom: 20,
    },
    rightContainer: {
        flex: 1,
        marginRight: 10,
        // borderBottomWidth: 1,
        backgroundColor: '#5bf812',
        marginLeft:70,
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        padding:10,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'right',
    },
    year: {
        textAlign: 'left',
    },
    date: {
        position: 'absolute',
        top: 10,
        right: 15,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius:5,
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    _input: {
        height: 40,
        width: width * 0.8,
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 50,
        /*  alignSelf:'center',*/
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        fontSize: 20,
    },
});
