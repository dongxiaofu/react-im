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

const {height, width} = Dimensions.get('window');
type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class Login extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bread}>
                    <Text style={styles.title}>手机号登录</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.form_line_no_border}>
                        <Text style={styles.label}>账号</Text>
                        <TextInput
                            style={styles.ipt}
                            // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder={'请填写手机号'}
                        />
                    </View>
                    <View style={styles.form_line_no_border}>
                        <Text style={styles.label}>密码</Text>
                        <TextInput
                            style={styles.ipt}
                            placeholder="请填写密码"
                            secureTextEntry={true}//隐藏输入内容
                        />
                    </View>
                </View>
                <View style={styles.btn_container}>
                    <TouchableHighlight style={styles.login_btn}>
                        <Text style={styles.login_btn_text}>登录</Text>
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
        // width:width-10,
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

        width:width*0.9,
        borderColor: 'red',
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

        // borderColor: 'gray',
        // borderWidth: 1,
        textAlignVertical: 'center',

        fontSize: 16,
    },
    ipt: {
        flex: 1,
        height: 40,
        // width: width * 0.6,
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
        width: width * 0.7,
        color: 'green',

        borderColor: 'gray',
        borderWidth: 1,
        textAlignVertical: 'center',

        fontSize: 16,
    },
    btn_container: {},
    login_btn:{
        padding: 12,
        backgroundColor: '#DCDCDC',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        borderRadius: 5,
    },
    login_btn_text:{
        textAlign:'center',
        // height:50,
        textAlignVertical:'center',
        color: 'grey',
        fontSize:16,
    },
});


