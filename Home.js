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

import Detail from './Detail';
import Movies from './Movies';


// const Stack = createStackNavigator;
// const Tab = createBottomTabNavigator;

type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

class Home extends Component {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };
    }

    test = () => {
        return (
            <Detail />
        );
    }

     HomeScreen() {
        return (
            <Movies />
        );
        // return (
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <Text>Home!</Text>
        //     </View>
        // );
    }

     SettingsScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }


    // render() {
    //     const Tab = createBottomTabNavigator();
    //     return (
    //         <NavigationContainer>
    //             <Tab.Navigator>
    //                 <Tab.Screen name="Home" component={this.HomeScreen} />
    //                 <Tab.Screen name="Settings" component={this.SettingsScreen} />
    //             </Tab.Navigator>
    //         </NavigationContainer>
    //     );
    // };

    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={this.HomeScreen} />
                    <Stack.Screen name="Detail" component={this.HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };



}

export default Home;
