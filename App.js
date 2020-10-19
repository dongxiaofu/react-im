import * as React from 'react';
import {Image, Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


function HomeScreen() {
    // const DATA = [
    //     {
    //         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //         title: 'First Item',
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //         title: 'Third Item',
    //     },
    // ];
    // const movie = DATA;


    const DATA = [
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
        // <View style={styles.item}>
        //     <Text>{item.title}</Text>
        //     <Text>{item.year}</Text>
        //     <Image style={{width:100,height:100}} source={{uri: item.posters.thumbnail}}/>
        //     {/*<Text style={styles.title}>{title}</Text>*/}
        // </View>

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

    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                tabStyle: {
                    backgroundColor: '#ddd',
                    paddingBottom: 15,
                    // borderRightWidth: 1,
                    borderRightColor: '#fff',
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
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
