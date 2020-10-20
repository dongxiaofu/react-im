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

    _pressRow(){
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
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>小王</Text>
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
                    renderItem={Item}
                    keyExtractor={item => item.id}
                />
                <View style={{
                    // padding: 10,
                    position: 'absolute',
                    width: width,
                    bottom: 0,
                    left: 0,
                    // zIndex: 50,
                    backgroundColor: '#e2e2e2',//'#e2e2e2',
                }}>
                    <TextInput
                        style={styles._input}
                        placeholder="Type here to translate!"
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
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        // paddingBottom: 20,
    },
    rightContainer: {
        flex: 1,
        marginLeft: 20,
        borderBottomWidth: 1,
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
        width: 60,
        height: 60,
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },

    _input: {
        height: 50,
        width: width * 0.9,
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 10,
        /*  alignSelf:'center',*/
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        fontSize: 20,
    },
});
