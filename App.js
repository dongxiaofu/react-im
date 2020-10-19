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

const Stack = createStackNavigator();

function test() {
    return <Home/>;
}

function App() {
    // const Tab = createBottomTabNavigator();
    return (
    //
    // <NavigationContainer>
    //     <Tab.Navigator>
    //         <Tab.Screen name="Home" component={this.HomeScreen} />
    //         <Tab.Screen name="Settings" component={this.SettingsScreen} />
    //     </Tab.Navigator>
    // </NavigationContainer>
        <Home/>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home">
        //         {/*<Stack.Screen.component Home={Home}/>*/}
        //         <Stack.Screen name="Details" component={test} />
        //         {/*<Home />*/}
        //     </Stack.Navigator>
        //     {/*this.MyTabs()*/}
        // </NavigationContainer>
    );
}

export default App;
