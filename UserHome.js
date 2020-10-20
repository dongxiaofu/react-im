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

    render() {

        const USER = {
            gender: '',
            name: 'Web开发',
            ID: 'gganghong',
            area: '阿拉伯联合酋长国 乌姆盖万',
            avatar: {thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'},
        };

        const ALBUMS = [
            {
                id: '1',
                thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            }, {
                id: '2',
                thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            }, {
                id: '3',
                thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            }, {
                id: '4',
                thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
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
                <View style={sendBtn.container}>
                    <TouchableHighlight
                        onPress={() => Alert.alert('Simple Button pressed')}
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

