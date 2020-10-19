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
import {PureComponent} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';


type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class Detail extends PureComponent {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };

    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen===========</Text>
                {/*<Button*/}
                {/*    title="Go to Details... again"*/}
                {/*    onPress={() => navigation.push('Details')}*/}
                {/*/>*/}
            </View>
        );
    };
}
