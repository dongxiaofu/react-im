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

    render() {
        const MOVIES = [
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
                <Button title="Go to Home" onPress={() => this.props.nav.navigate('Settings')}/>
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
