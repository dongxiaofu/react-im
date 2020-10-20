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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';
// 导入路由的组件
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');
type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class MyZone extends Component {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };
    }

    // js 为什么计算结果老是出现NaN
    // 可能原因：
    // 1、操作的两个数，类型不一致
    // 2、有一个值为NaN，计算後为NaN
    _pressRow(rowID) {
        // this.props.nav.navigate('Movie');
        // this.props.nav.navigate('Root', { screen: 'Movie' });
        console.log(rowID);
        let rowId = parseInt(rowID);
        console.log(rowId % 2);
        if (rowId % 2 == 0) {

            Actions.moviedetail(rowId);
        } else {
            Actions.chat(rowId);
        }
    }

    _header() {
        // const ZONEBACKGROUD = {image: 'https://img.tupianzj.com/uploads/allimg/201019/30-201019143129.jpg'};
        const ZONEBACKGROUD = {image: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'};

        const USER = {
            thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            motto: '敢犯强汉者，虽远必诛！',
            name: '刘彻',
        };

        return (
            // <Text style={{fontWeight: 'bold', fontSize: 20}}>热门电影</Text>
            <View>
                <View style={zone.container}>
                    <ImageBackground source={{uri: ZONEBACKGROUD.image}} style={zone.image}>
                        <View style={user.container}>
                            <Image source={{uri: USER.thumbnail}} style={user.thumbnail}/>
                            <Text style={user.name}>{USER.name}</Text>
                            <Text style={user.motto}>{USER.motto}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={today.container}>
                    <Text style={today.label}>今天</Text>
                    {/*todo 发表按钮*/}
                    {/*发表按钮*/}
                </View>
            </View>
        );
    }

    render() {
        const USER = {
            thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            motto: '敢犯强汉者，虽远必诛！',
            name: '刘彻',
        };
        const MOVIES = [
            {
                id: '1',
                title: '订阅号消息',
                month: '9',
                day: '19',
                posters: {
                    thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                    content: '据报道，巴基斯坦电信管理局（PTA）在19日的声明中称：“在TikTok管理层保证将封禁所有多次传播淫秽和不道德信息的账' +
                        '户后，TikTok已被解封。”据报道，巴基斯坦电信当局10月9日曾表示，由于TikTok上有“不道德”和“不雅”内容的投诉，他们将禁' +
                        '止TikTok在巴基斯坦的下载和使用。此举遭到了巴基斯坦社会和巴议会的强烈反对，巴基斯坦参议院立法委员会10月12日批评了巴' +
                        '基斯坦电信监管机构禁止TikTok的做法，并指出巴基斯坦必须跟上全球发展的步伐，必须采取纠正措施，而不是采取孤立主义的做' +
                        '法。',
                },

            },
            {
                id: '2',
                title: '订阅号消息',
                year: '2019',
                month: '9',
                day: '19',
                posters: {
                    thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                    content: '据报道，巴基斯坦电信管理局（PTA）在19日的声明中称：“在TikTok管理层保证将封禁所有多次传播淫秽和不道德信息的账' +
                        '户后，TikTok已被解封。”据报道，巴基斯坦电信当局10月9日曾表示，由于TikTok上有“不道德”和“不雅”内容的投诉，他们将禁' +
                        '止TikTok在巴基斯坦的下载和使用。此举遭到了巴基斯坦社会和巴议会的强烈反对，巴基斯坦参议院立法委员会10月12日批评了巴' +
                        '基斯坦电信监管机构禁止TikTok的做法，并指出巴基斯坦必须跟上全球发展的步伐，必须采取纠正措施，而不是采取孤立主义的做' +
                        '法。',
                },

            },
            {
                id: '3',
                title: '订阅号消息',
                year: '2019',
                month: '9',
                day: '19',
                posters: {
                    thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                    content: '据报道，巴基斯坦电信管理局（PTA）在19日的声明中称：“在TikTok管理层保证将封禁所有多次传播淫秽和不道德信息的账' +
                        '户后，TikTok已被解封。”据报道，巴基斯坦电信当局10月9日曾表示，由于TikTok上有“不道德”和“不雅”内容的投诉，他们将禁' +
                        '止TikTok在巴基斯坦的下载和使用。此举遭到了巴基斯坦社会和巴议会的强烈反对，巴基斯坦参议院立法委员会10月12日批评了巴' +
                        '基斯坦电信监管机构禁止TikTok的做法，并指出巴基斯坦必须跟上全球发展的步伐，必须采取纠正措施，而不是采取孤立主义的做' +
                        '法。',
                },

            },
            // {
            //     id: '4',
            //     title: '订阅号消息',
            //     year: '2019',
            //     month: '9',
            //     day: '19',
            //     posters: {
            //         thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            //         content: '据报道，巴基斯坦电信管理局（PTA）在19日的声明中称：“在TikTok管理层保证将封禁所有多次传播淫秽和不道德信息的账' +
            //             '户后，TikTok已被解封。”据报道，巴基斯坦电信当局10月9日曾表示，由于TikTok上有“不道德”和“不雅”内容的投诉，他们将禁' +
            //             '止TikTok在巴基斯坦的下载和使用。此举遭到了巴基斯坦社会和巴议会的强烈反对，巴基斯坦参议院立法委员会10月12日批评了巴' +
            //             '基斯坦电信监管机构禁止TikTok的做法，并指出巴基斯坦必须跟上全球发展的步伐，必须采取纠正措施，而不是采取孤立主义的做' +
            //             '法。',
            //     },
            //
            // },
            // {
            //     id: '5',
            //     title: '订阅号消息',
            //     year: '2019',
            //     month: '9',
            //     day: '19',
            //     posters: {
            //         thumbnail: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            //         content: '据报道，巴基斯坦电信管理局（PTA）在19日的声明中称：“在TikTok管理层保证将封禁所有多次传播淫秽和不道德信息的账' +
            //             '户后，TikTok已被解封。”据报道，巴基斯坦电信当局10月9日曾表示，由于TikTok上有“不道德”和“不雅”内容的投诉，他们将禁' +
            //             '止TikTok在巴基斯坦的下载和使用。此举遭到了巴基斯坦社会和巴议会的强烈反对，巴基斯坦参议院立法委员会10月12日批评了巴' +
            //             '基斯坦电信监管机构禁止TikTok的做法，并指出巴基斯坦必须跟上全球发展的步伐，必须采取纠正措施，而不是采取孤立主义的做' +
            //             '法。',
            //     },
            //
            // },
        ];
        const BLOGS = [
            // {
            //     id: '0',
            // },
            {
                id: '2',
                year: '2020',
                list: MOVIES,
            },
            // {
            //     id: '1',
            //     year: '2019',
            //     list: MOVIES,
            // },
        ];

        // const ZONEBACKGROUD = {image: 'https://img.tupianzj.com/uploads/allimg/201019/30-201019143129.jpg'};
        const ZONEBACKGROUD = {image: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'};

        const renderABlog = ({item}) => (
            <TouchableHighlight onPress={() => this._pressRow(item.id)}>
                <View style={blog.container}>
                    <View style={blog.postTime}>
                        <Text style={blog.day}>{item.day}</Text>
                        <Text style={blog.month}>{item.month}月</Text>
                    </View>
                    <View style={blog.mainContainer}>
                        <Image style={blog.thumbnail} source={{uri: item.posters.thumbnail}}/>
                        <Text
                            style={blog.content}
                            numberOfLines={3}
                            ellipsizeMode='tail'
                        >
                            {item.posters.content}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );


        const renderToday = ({item}) => (
            <View style={today.container}>
                <Text style={today.label}>今天</Text>
                {/*todo 发表按钮*/}
                {/*发表按钮*/}
            </View>
        );

        const renderBlogs = ({item}) => (
            <View style={BlogList.container}>
                <Text style={BlogList.year}>{item.year}年</Text>
                <SafeAreaView style={BlogList.list}>
                    <FlatList
                        data={item.list}
                        renderItem={renderABlog}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        );


        const renderYearlyBlogs = ({item}) => (
            <TouchableHighlight onPress={() => this._pressRow(item.id)}>
                <View style={styles.container}>
                    <Text style={styles.title}>{item.year}年</Text>
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={item.list}
                            renderItem={renderYearlyBlogs}
                            keyExtractor={item => item.id}
                        />
                        {/*<Button title="Go to Home" onPress={() => this.props.nav.navigate('Settings')}/>*/}
                    </SafeAreaView>
                </View>
            </TouchableHighlight>
        );

        return (
            <View style={myZone.container}>
                {/*背景*/}
                {/*<View style={zone.container}>*/}
                {/*    <ImageBackground source={{uri: ZONEBACKGROUD.image}} style={zone.image}>*/}
                {/*        <View style={user.container}>*/}
                {/*            <Image source={{uri: USER.thumbnail}} style={user.thumbnail}/>*/}
                {/*            <Text style={user.name}>{USER.name}</Text>*/}
                {/*            <Text style={user.motto}>{USER.motto}</Text>*/}
                {/*        </View>*/}
                {/*    </ImageBackground>*/}
                {/*</View>*/}
                <View>
                    {/*历史博客*/}
                    <SafeAreaView>
                        {/*今天*/}
                        <FlatList
                            ListHeaderComponent={this._header}//header头部组件
                            data={BLOGS}
                            renderItem={renderBlogs}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
            </View>
        );
    };
}

// 一篇博客
const blog = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        marginBottom:30,
        // paddingBottom: 20,
    },
    postTime: {
        flexDirection: 'row',
    },
    day: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    month: {
        fontWeight: 'bold',
        top: 20,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
    },
    thumbnail: {
        width: 80,
        height: 80,
    },
    content: {
        flex: 1,
        paddingRight: 10,
        marginLeft: 5,
        fontSize: 15,
        lineHeight: 20,
    },
});

// 博客列表
const BlogList = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        marginLeft: 10,
        // marginRight: 10,
    },
    year: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    list: {},
});

// 整体
const myZone = StyleSheet.create({
    container: {
        flexDirection: 'row',        // 该设定导致其他元素不显示
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        // height:500,
    },
    inner: {
        marginLeft: 10,
    },
    year: {},
    list: {},
});
// 主页背景
const zone = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        height: 300,
        width: width,
        // height: 500,
        // backgroundColor: '#085c80',
        // paddingTop: 10,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        height: 300,
        // justifyContent: 'center',
    },
});
// 用户信息
const user = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        height: 50,
        width: width,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        position: 'absolute',
        right: 0,
        bottom: 0,

    },
    thumbnail: {
        width: 60,
        height: 60,
        position: 'absolute',
        right: 20,
        bottom: 40,
        borderRadius: 8,
        // flex:1,
    },
    motto: {
        position: 'absolute',
        right: 10,
        bottom: 8,
    },
    name: {
        position: 'absolute',
        marginRight: 20,
        right: 70,
        bottom: 60,
        fontSize: 17,
        fontWeight: '400',
        color: 'white',
    },
});
// 今天
const today = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        paddingTop: 60,
        marginLeft: 10,
    },
    label: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

// <View style={myZone.container}>
//     {/*背景*/}
//     <View style={zoneBackgroud.container}>
//         <View style={user.container}>
//             <Image source={{uri: USER.thumbnail}} style={user.thumbnail}/>
//             <Text style={user.name}>{user.name}</Text>
//             <Text style={user.motto}>{user.motto}</Text>
//         </View>
//     </View>
//     {/*今天*/}
//     <View style={today.container}>
//         <Text style={today.label}>今天</Text>
//         {/*todo 发表按钮*/}
//         {/*发表按钮*/}
//     </View>
// const renderBlogs = ({item}) => (
//     <TouchableHighlight onPress={() => this._pressRow(item.id)}>
//         <View style={BlogList.container}>
//             <Text style={BlogList.year}>{item.year}年</Text>
//             <SafeAreaView style={BlogList.list}>
//                 <FlatList
//                     data={item.list}
//                     renderItem={renderABlog}
//                     keyExtractor={item => item.id}
//                 />
//             </SafeAreaView>
//         </View>
//     </TouchableHighlight>
// );
// <TouchableHighlight onPress={() => this._pressRow(item.id)}>
//     <View style={styles.container}>
//         <View style={blog.postTime}>
//             <Text title={item.day}/>
//             <Text title={item.month}/>
//         </View>
//         <View style={blog.main}>
//             <Image style={blog.thumbnail} source={item.posters.thumbnail} />
//             <Text style={blog.content}>{item.posters.content}</Text>
//         </View>
//     </View>
// </TouchableHighlight>
