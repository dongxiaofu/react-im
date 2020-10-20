// In App.js in a new project
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
import Home from './Home';

type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

import Root from './Root';
import MovieDetail from './MovieDetail';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Movies from './Movies';
import Main from './Main';
import Chat from './Chat';
import UserHome from './UserHome';

// const Stack = createStackNavigator();

function App() {
    return (
        <Router sceneStyle={{backgroundColor: 'white'}}>
            <Stack key="root">
                {/* 配置路由规则 */}
                {/* 注意，所有的路由规则，都应该写到这个位置 */}
                {/* 第一个 Scene 就是默认要展示的首页 */}
                {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
                <Scene key="app" component={Main} title="" hideNavBar={true}/>
                {/* 电影列表的路由规则 */}
                <Scene key="movielist" component={Movies} title="热映电影列表"/>
                <Scene key="moviedetail" component={MovieDetail} title="梁山群"/>
                <Scene key="chat" component={Chat} title="小王"/>
                <Scene key="userhome" component={UserHome} title=""/>
            </Stack>
        </Router>);
}

export default App;
