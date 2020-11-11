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
    TouchableHighlight, Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import {StackActions as navigation} from '@react-navigation/routers/src/StackRouter';
// 导入路由的组件
import {Actions} from 'react-native-router-flux';

import MovieDetail from './MovieDetail';

const {height, width} = Dimensions.get('window');

type Props = {
    current: number;
    count: number;
    navigator: any;
    Tab: any;
};

export default class BlogDetail extends Component {
    constructor(props: Props) {
        super(props);

        // (this: any).navigateToSettings = this.navigateToSettings.bind(this);
        // (this: any).navigateToLocations = this.navigateToLocations.bind(this);

        this.state = {
            listData: [],
        };
    }

    goUserHome(rowID) {
        Actions.userhome();
    }

    _header(postId) {
        return (
            <View style={post.container}>
                <Image
                    style={post.avatar}
                    source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}}
                />
                <View style={post.content_container}>
                    <Text style={post.username}>素悟空</Text>
                    <View style={post.content_wrapper}>
                        <Text style={post.content} numberOfLines={10}>
                            10月19日出版的《学习时报》刊发了山东省省长李干杰的文章《服务国家战略 奋力走在前列》。在“做好融合发展文章，提升山东半
                            岛城市群竞争力”这一部分中，提到支持青岛对标深圳特区实行全方位对外开放。站在特区成立40周年的重要节点上，伴随着《深圳建
                            设中国特色社会主义先行示范区综合改革试点实施方案（2020-2025年）》的对外发布，深圳毫无疑问成为近期最炙手可热的中国城市。

                            值得一提的是，这是青岛自2019年3月提出“学深圳，赶深圳”的城市发展战略以来，山东省领导首次公开表态支持青岛全面对标深圳。
                            改革开放40年来，深圳无疑是发展最为成功的城市。身为转型成功者的代表，中国有众多城市将深圳作为对标的对象。对于黄海之滨的
                            青岛来说，山东省委省政府给予的定位是对外开放新高地的桥头堡。站在对外开放的最前沿，国家战略与时代机遇叠加，让青岛有了更
                            大的发展空间。
                        </Text>
                    </View>
                    {/*todo 相册缩略图*/}
                    {/*<FlatList></FlatList>*/}
                    <View style={post.create_time_wrapper}>
                        <Text style={post.create_time}>2019年8月13日 19:23</Text>
                        <Text style={post.delete_btn}>删除</Text>
                    </View>
                </View>
            </View>
        );
    }


    render() {

        const COMMENTS = [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        ];

        const renderComment = ({item}) => (
            <View style={Comment.container}>
                <TouchableHighlight onPress={() => this.goUserHome(3)}>
                    <Image
                        style={Comment.avatar}
                        source={{uri: 'https://img2.woyaogexing.com/2020/10/14/85789848287243ae9234db7527d166a7!400x400.jpeg'}}
                    />
                </TouchableHighlight>
                <View style={Comment.content_container}>
                    <View style={Comment.author_wrapper}>
                        <Text style={Comment.author}>猪八戒</Text>
                        <Text style={Comment.create_time}>2019年8月11日 19:23</Text>
                    </View>
                    <Text style={Comment.content}>
                        玩了一天还🏃，体力充沛啊。它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。align-items属性定义项
                        目在交叉轴上如何对齐。align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。flex-grow
                        属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
                    </Text>
                </View>
            </View>
        );
        return (
            <SafeAreaView>
                {/*今天*/}
                <FlatList
                    ListHeaderComponent={this._header}//header头部组件
                    data={COMMENTS}
                    renderItem={renderComment}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    };
}

//
// <View style={post.container}>
//     <Image
//         style={post.avatar}
//         source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}}
//     />
//     <View style={post.content_container}>
//         <Text style={post.username}>素悟空</Text>
//         <Text style={post.content}>
//

// <Text style={post.create_time}>2019年8月13日 19:23</Text>
// <Text style={post.delete_btn}>删除</Text>

const post = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        // paddingBottom: 20,
    },
    avatar: {
        width: 60,
        height: 60,
    },
    content_container: {
        marginLeft: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content_wrapper: {
        paddingRight: 70,
    },
    content: {
        fontSize: 16,
        lineHeight: 30,
    },
    create_time_wrapper: {
        // 使垂直排列的元素水平排列
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    create_time: {
        color: 'grey',
    },
    delete_btn: {
        color: 'blue',
        marginLeft: 20,
    },
});

const Comment = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 5,
    },
    content_container: {
        marginLeft: 10,
        marginRight: 20,
    },
    author_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        // width: width,
    },
    author: {
        fontSize: 14,
        fontWeight: 'bold',
        // flex: 5,
    },
    create_time: {
        fontSize: 13,
        color: 'grey',
        marginRight: 30,
        // justifyContent:'flex-start',
        // textAlign: 'right',
        // position:'absolute',
        // flex:5,
    },
    content: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 30,
        marginRight: 30,
    },
});
