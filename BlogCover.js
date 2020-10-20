import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    FlatList,
    TouchableHighlight
} from 'react-native';

//引用插件
import Swiper from 'react-native-swiper';
import ViewControl from 'react-native-zoom-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');

export default class recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            tips: ['网易自营品牌', '30天无忧退货', '48小时快速退款'],
            topic: [
                {
                    title: '岁末清扫有它们，体验大不同',
                    describe: '更轻松、更美好的大扫除攻略',
                    price: '9.9元起',
                },
                {
                    title: '新年一点红，幸运一整年',
                    describe: '那些让你“红”运当头的好物',
                    price: '9.9元起',
                },
                {
                    title: '新年一点红，幸运一整年',
                    describe: '那些让你“红”运当头的好物',
                    price: '9.9元起',
                },
            ],
            special: [
                {title: '春宴 茶食礼盒 1.38千克', price: '168', describe: '定位高端,国际顶级品牌代工厂'},
                {title: '日本AKOYA天然海水珍珠18K金项链天然海水珍珠18K金项链', price: '999', describe: '定位高端,国际顶级品牌代工厂'},
                {title: '针织弹力女士短靴', price: '129', describe: '定位高端,国际顶级品牌代工厂'},
                {title: '怀抱休闲椅组合（皮款）', price: '1699', describe: '定位高端,国际顶级品牌代工厂'},
                {title: '针织弹力女士短靴', price: '168', describe: '定位高端,国际顶级品牌代工厂'},
                {title: '日本AKOYA天然海水珍珠18K金项链', price: '999', describe: '定位高端,国际顶级品牌代工厂'},
            ],
        };
    }


    renderSwiperItemView() {
        const imgs = [
            'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            'http://pic1.win4000.com/pic/8/00/5a3116741f.jpg',
            'http://img.08087.cc/uploads/20191221/19/1576927577-ezdtLhXcng.jpg',
        ];
        return imgs.map((item, i) => {
            return (
                <ViewControl
                    key={i}
                    cropWidth={width}
                    cropHeight={height}
                    imageWidth={width}
                    imageHeight={height}>
                    <Image
                        style={{
                            width: width,
                            height: height,
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: item,
                        }}/>
                </ViewControl>
            );
        });
    }
    // 去相册详情页
    goDetail(){
        Actions.blogdetail()
    }

    // todo 评论、点赞
    render() {
        return (
            <View style={wapper.container}>
                <Swiper
                    loop={false}
                    showsPagination={false}>
                    {this.renderSwiperItemView()}
                </Swiper>
                <View style={wapper.post_brief_container}>
                    <Text
                        style={wapper.post_brief}
                        numberOfLines={4}
                    >
                        开放，深圳发展的永恒主旋律。改革开放40年来，深圳由一座边陲小镇逐步蜕变为国际化的大都市，其中开放扮演了重要的角
                        色。深圳对外开放的成功，也让它成为国内诸多城市用来对标的“榜样”。在2020年10月19日出版的《学习时报》中，刊发了山东
                        省省长李干杰的文章《服务国家战略 奋力走在前列》。文中提到，支持青岛对标深圳特区实行全方位对外开放。
                    </Text>
                    <View>
                        <TouchableHighlight onPress={() => this.goDetail()}>
                        <View>
                            <Text style={wapper.comment_num}>29</Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }


    // render() {
    //     return (
    //         <View style={styles.container}>
    //
    //             <Swiper
    //                 style={styles.wrapper}
    //                 height={width*40/75}
    //                 showsButtons={true}
    //                 autoplay={false}
    //                 paginationStyle={styles.paginationStyle}
    //                 dotStyle={styles.dotStyle}
    //                 activeDotStyle={styles.activeDotStyle}
    //             >
    //                 <Image source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}} style={styles.bannerImg} />
    //                 <Image source={{uri: 'http://pic1.win4000.com/pic/8/00/5a3116741f.jpg'}} style={styles.bannerImg} />
    //                 <Image source={{uri: 'http://img.08087.cc/uploads/20191221/19/1576927577-ezdtLhXcng.jpg'}} style={styles.bannerImg} />
    //                 <Image source={{uri: 'http://pic29.nipic.com/20130531/8786105_102319220000_2.jpg'}} style={styles.bannerImg} />
    //                 <Image source={{uri: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg'}} style={styles.bannerImg} />
    //             </Swiper>
    //         </View>
    //     );
    // }
}
const wapper = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    post_brief_container: {
        position: 'absolute',
        bottom: 0,
        width: width,
        // height: 160,
        height: 'auto',

        backgroundColor: 'black',
        opacity: 0.7,
    },
    post_brief: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 25,
        paddingBottom: 40,
    },
    tool_bar: {
        height:40,
    },
    tool_bar_right:{
        position: 'absolute',
        // right:0,
    },
    comment_num:{
        fontSize: 16,
        color: '#fff',
        textAlign:'right'
    },
});
