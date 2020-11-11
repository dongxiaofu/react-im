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
// import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';

import Detail from './Detail';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import {Actions} from 'react-native-router-flux';
import Contact from './Contact';
import Login from "./Login";
import Register from "./Register";


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
            <Detail/>
        );
    };

    HomeScreen({navigation}) {
        return (
            <Movies nav={navigation}/>

        );
        // return (
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <Text>Home screen</Text>
        //         <Button
        //             title="Go to Details"
        //             onPress={() => navigation.push('Settings')}
        //         />
        //     </View>
        // );
    }

    SettingsStackScreen({navigation}) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            </View>
        );

        //
        // const SettingsStack = createStackNavigator();
        // return (
        //     <SettingsStack.Navigator>
        //         {/*<SettingsStack.Screen name="Settings" component={this.SettingsScreen} />*/}
        //         <SettingsStack.Screen name="Details" component={this.HomeScreen} />
        //     </SettingsStack.Navigator>
        // );
    }

    Register({}) {
        // return (
        //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //         <Text>Settings!</Text>
        //         <Button title="Go to Register" onPress={() => Actions.register()}/>
        //     </View>
        // );

        return (
            <Register />
        );
    }

    Login({}) {
        // 经中间页跳转到登录页面
        // return (
        //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //         <Text>Settings!</Text>
        //         <Button title="Go to Login" onPress={() => Actions.login()}/>
        //     </View>
        // );

        return (
            <Login />
        );
    }

    renderContact({}) {
        return (
            // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            //     <Text>Settings!</Text>
            //     <Button title="Go to Login" onPress={() => Actions.contact()}/>
            // </View>
            <Contact />
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

    Other() {
        const Stack = createStackNavigator();
        return (<Stack.Navigator>
            {/*<Stack.Screen name="Profile" component={this.HomeScreen} />*/}
            <Stack.Screen name="Movie" component={MovieDetail}/>
        </Stack.Navigator>);
    }

    render() {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" options={{title: '微信',fontSize: 30, color: 'red',}} component={this.HomeScreen}/>
                <Tab.Screen name="Contact" options={{title: '通讯录'}} component={this.renderContact}/>
                <Tab.Screen name="Login"  options={{title: '登录'}} component={this.Login}/>
                <Tab.Screen name="Register"  options={{title: '注册'}} component={this.Register}/>
                {/*<Stack.Screen name="Movie" component={MovieDetail} />*/}
                {/*<Tab.Screen name="Root" component={this.Other} />*/}
            </Tab.Navigator>
        );
    };


}

export default Home;
