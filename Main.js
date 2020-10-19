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
import Home from './Home';


// const Stack = createStackNavigator;
// const Tab = createBottomTabNavigator;

type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

class Main extends Component {
    constructor(props: Props) {
        super(props);

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
            <Movies nav = {navigation}/>

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

    Other(){
        const Stack = createStackNavigator();
        return(<Stack.Navigator>
            {/*<Stack.Screen name="Profile" component={this.HomeScreen} />*/}
            <Stack.Screen name="Movie" component={MovieDetail} />
        </Stack.Navigator>);
    }

    render() {
        return (
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        );
    };


}

export default Main;
