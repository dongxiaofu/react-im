import * as React from 'react';
import {
    Image,
    Text,
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
    StatusBar,
    Button,
    TouchableHighlight,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';
// 导入路由的组件
import { Actions } from 'react-native-router-flux'

import MovieDetail from './MovieDetail';


type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class Movies extends Component {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };
    }

    // js 为什么计算结果老是出现NaN
    // 可能原因：
    // 1、操作的两个数，类型不一致
    // 2、有一个值为NaN，计算後为NaN
    _pressRow(rowID) {
        // this.props.nav.navigate('Movie');
        // this.props.nav.navigate('Root', { screen: 'Movie' });
        console.log(rowID)
        let rowId = parseInt(rowID)
        console.log(rowId % 2)
        if(rowId % 2 == 0){

            Actions.moviedetail(rowId);
        }else{
            Actions.chat(rowId);
        }
    }


    render() {
        const MOVIES = [
            {
                id: '1',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '10月16日',
                posters: {thumbnail: 'http://boss.chugang.net/static/Chat/avatar1.jpeg'},
            },
            {
                id: '2',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'http://boss.chugang.net/static/Chat/avatar2.jpeg'},
            },
            {
                id: '3',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/30/5f773a8acc1c460da029bd8690f19785!400x400.jpeg'},
            },
            {
                id: '4',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/14/bef96747cb564b84866ccfa1204db395!400x400.jpeg'},
            },

            {
                id: '1',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '10月16日',
                posters: {thumbnail: 'http://boss.chugang.net/static/Chat/avatar1.jpeg'},
            },
            {
                id: '5',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'http://boss.chugang.net/static/Chat/avatar2.jpeg'},
            },
            {
                id: '6',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/30/5f773a8acc1c460da029bd8690f19785!400x400.jpeg'},
            },
            {
                id: '7',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/14/bef96747cb564b84866ccfa1204db395!400x400.jpeg'},
            },

            {
                id: '8',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '10月16日',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/05/b11afe599aa94016aefb928db80d9b8c!400x400.jpeg'},
            },
            {
                id: '9',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '10月17日',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/05/8753de8de66542b99f6982b1b37a5be7!400x400.jpeg'},
            },
            {
                id: '10',
                title: '订阅号消息',
                year: '小明撤回了一个群待办',
                date: '18:19',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/30/5f773a8acc1c460da029bd8690f19785!400x400.jpeg'},
            },
            {
                id: '11',
                title: 'Web开发',
                year: '疫情之下的众生相',
                date: '昨天',
                posters: {thumbnail: 'https://img2.woyaogexing.com/2020/10/14/bef96747cb564b84866ccfa1204db395!400x400.jpeg'},
            },
        ];

        const Item = ({item}) => (
            <TouchableHighlight onPress={() => this._pressRow(item.id)}>
                <View style={styles.container}>
                    <Image
                        source={{uri: item.posters.thumbnail}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.year}>{item.year}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={MOVIES}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                />
                {/*<Button title="Go to Home" onPress={() => this.props.nav.navigate('Settings')}/>*/}
            </SafeAreaView>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        borderBottomWidth: 0.2,
        // borderColor:'gray',
    },
    title: {
        fontSize: 18,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
        fontSize: 13,
        color:'grey',
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
});
