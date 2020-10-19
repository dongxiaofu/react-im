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
    Tab:any;
};


// const Tab = createBottomTabNavigator;

class Root extends Component {

    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };
        this.title = this.props.title;
        this.url = this.props.url;
    }

    HomScreen(){
        return <Text>Hello, I am your cat!</Text>;
    }

    // render() {
    //     return <Text>Hello, I am your cat!=========</Text>;
    // }

    render() {
        const Stack = createStackNavigator;
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/*<Stack.Screen.component Home={Home}/>*/}
                    <Stack.Screen name="Details"><Home /></Stack.Screen>
                    {/*<Home />*/}
                </Stack.Navigator>
            {/*this.MyTabs()*/}
            </NavigationContainer>
        );
    }
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
});

export default Root;
