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
    ImageBackground, Dimensions,
    ScrollView,
    TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';
// 导入路由的组件
import {Actions} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');
type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class Register extends Component {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };
    }

    _pressRow(rowID) {
        Actions.blogcover(rowID);
    }

    openCamera() {
        alert('hi')
        console.log('open camera');

        const options = {
            title: 'Select Avatar',
            customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bread}>
                    <Text style={styles.title}>手机号注册</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.form_line}>
                        <View style={styles.nickname}>
                            <View>
                                <Text style={styles.label}>昵称</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.ipt_small}
                                    // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                    placeholder={'例如：陈晨'}
                                />
                            </View>
                        </View>

                        <View style={styles.camera} ref="camera2">
                            <TouchableHighlight onPress={() => this.openCamera()}
                                                title="test"
                                                style={{
                                                    height: 80,
                                                    width: 80,
                                                    position: 'absolute',
                                                    left:0,
                                                    borderColor:'red',
                                                    borderWidth:1,
                                                    zIndex:5,
                                                    // backgroundColor:'red',
                                                    opacity:0,
                                                }}
                            >
                                <Text >Test</Text>
                            </TouchableHighlight>
                            <MaterialCommunityIcons name="camera-outline" size={35} color="black"
                                                    style={{
                                                        height: 35,
                                                        width: 35,
                                                        // borderWidth: 1,
                                                        color: 'grey',
                                                        position: 'absolute',
                                                        top: 22.5,
                                                        left: 22.5,
                                                    }}
                            />
                            <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
                        </View>

                    </View>
                    <View style={styles.form_line_no_border}>
                        <Text style={styles.label}>国家/地区</Text>
                        <Text style={styles.country}>中国大陆（+86）</Text>
                    </View>
                    <View style={styles.form_line}>
                        <Text style={styles.label}>手机号</Text>
                        <TextInput
                            style={styles.ipt}
                            // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder={'请填写手机号'}
                        />
                    </View>
                    <View style={styles.form_line}>
                        <Text style={styles.label}>密码</Text>
                        <TextInput
                            style={styles.ipt}
                            // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder={'填写密码'}
                            secureTextEntry={true}//隐藏输入内容
                        />
                    </View>
                </View>
                <View style={styles.btn_container}>
                    <TouchableHighlight style={styles.login_btn} onPress={()=>{}}>
                        <Text style={styles.login_btn_text}>注册</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        marginBottom: 30,
        // 奇怪，padding竟然有效
        paddingLeft: 20,
        paddingRight: 20,
    },
    bread: {
        marginTop: 30,
    },
    title: {
        fontSize: 30,
    },
    form: {
        marginTop: 40,
        marginBottom: 20,
    },
    form_line: {
        marginBottom: 10,
        flexDirection: 'row',

        borderColor: 'gray',
        borderWidth: 1,
    },
    form_line_no_border: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    nickname: {
        width: width * 0.7,
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 1,
    },
    label: {
        marginRight: 10,
        height: 40,
        width: width * 0.2,

        borderColor: 'gray',
        borderWidth: 1,
        textAlignVertical: 'center',

        fontSize: 16,
    },
    ipt: {
        height: 40,
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,

        fontSize: 16,

    },
    ipt_small: {
        height: 40,
        width: width * 0.47,
        borderColor: 'gray',
        borderWidth: 1,

        fontSize: 16,
    },
    country: {
        height: 40,
        flex: 1,
        color: 'green',

        borderColor: 'gray',
        borderWidth: 1,
        textAlignVertical: 'center',

        fontSize: 16,
    },
    btn_container: {},
    uploadAvatar: {
        width: 80,
        height: 80,
    },
    login_btn: {
        padding: 12,
        backgroundColor: '#DCDCDC',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        borderRadius: 5,
    },
    login_btn_text: {
        textAlign: 'center',
        // height:50,
        textAlignVertical: 'center',
        color: 'grey',
        fontSize: 16,
    },
    camera: {
        width: 80,
        height: 80,
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderWidth: 0.5,
        backgroundColor: '#DCDCDC',
    },
});


