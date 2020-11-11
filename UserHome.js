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
    Alert, Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {PureComponent} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';
import {Actions} from 'react-native-router-flux';


type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

const {height, width} = Dimensions.get('window');
const frontendColor = '#efebeb';

export default class UserHome extends PureComponent {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };

    }

    _pressRow(userID) {
        console.log(userID);
        let userIdInt = parseInt(userID);
        console.log(userID);
        Actions.chat(userIdInt);
    }

    _goMyZone(userID) {
        console.log(userID);
        let userIdInt = parseInt(userID);
        console.log(userID);
        Actions.myzone(userIdInt);
    }

    render() {

        const USER = {
            uerId: 5,
            gender: '',
            name: 'Web开发',
            ID: 'gganghong',
            area: '阿拉伯联合酋长国 乌姆盖万',
            avatar: {thumbnail: 'http://boss.chugang.net/static/Chat/avatar2.jpeg'},
        };

        let userId = USER.uerId;

        const ALBUMS = [
            {
                id: '1',
                thumbnail: 'https://img.ivsky.com/img/tupian/pre/202004/11/pubu-001.jpg',
            }, {
                id: '2',
                thumbnail: 'https://img.ivsky.com/img/tupian/pre/202004/11/pubu-002.jpg',
            }, {
                id: '3',
                thumbnail: 'https://img.ivsky.com/img/tupian/pre/202004/11/pubu-003.jpg',
            }, {
                id: '4',
                thumbnail: 'https://img.ivsky.com/img/tupian/pre/202004/11/pubu-004.jpg',
            },
        ];

        const Item = ({item}) => (
            <View style={photo.container}>
                <Image
                    source={{uri: item.thumbnail}}
                    style={photo.thumbnail}
                />
            </View>
        );

        return (
            <View style={body.container}>
                <View style={profile.container}>
                    <Image style={profile.avatar} source={{uri: USER.avatar.thumbnail}}/>
                    <View style={profile.profile}>
                        <Text style={profile.name}>{USER.name}</Text>
                        <View style={profile.row}>
                            <Text style={profile.label}>微信号：</Text>
                            <Text style={profile.txtContent}>{USER.ID}</Text>
                        </View>
                        <View style={profile.row}>
                            <Text style={profile.label}>地区：</Text>
                            <Text style={profile.txtContent}>{USER.area}</Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight
                    onPress={() => this._goMyZone({userId})}
                    underlayColor={frontendColor}
                >
                    <View style={friends.container}>
                        <Text style={friends.label}>朋友圈</Text>
                        <SafeAreaView style={album.container}>
                            <FlatList horizontal={true}
                                      data={ALBUMS}
                                      renderItem={Item}
                                      keyExtractor={item => item.id}
                            />
                        </SafeAreaView>
                    </View>
                </TouchableHighlight>
                <View style={sendBtn.container}>
                    <TouchableHighlight
                        onPress={() => this._pressRow({userId})}
                        underlayColor={frontendColor}
                    >
                        <Text style={sendBtn.btn}>发消息</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
}


const profile = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        borderBottomWidth: 1,
        backgroundColor: frontendColor,
    },
    avatar: {
        width: 65,
        height: 65,
    },

    profile: {
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    label: {
        fontSize: 15,
    },
    txtContent: {
        fontSize: 15,
    },
});


const friends = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        backgroundColor: frontendColor,
    },
    label: {
        width: 65,
        height: 60,
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 20,
    },
});


const sendBtn = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        height: 60,
        // textAlignVertical: 'center',
        width: width,
        backgroundColor: frontendColor,
    },
    btn: {
        fontSize: 20,
        color: 'blue',
        // paddingBottom:10,
        // paddingTop:10,
        height: 60,
        textAlignVertical: 'center',
    },
});


const album = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
    },
    btn: {},
});


const photo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 60,
        height: 60,
        marginRight: 10,

        borderBottomWidth: 1,
    },
    thumbnail: {
        width: 60,
        height: 60,
    },
});


const body = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'gray',
    },
});

