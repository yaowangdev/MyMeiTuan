import React,{PureComponent} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import NavigationTopBarMine from "../../widget/NavigationTopBarMine";
import SpaceView from "../../widget/SpaceView";
import color from "../../style/color";
import DetailCell from "../../widget/DetailCell";


export default class MineScene extends PureComponent{
    static navigationOptions = ({navigation}: any) => ({
        header:null
    });


    renderHeader(){
        return(
            <View style={{backgroundColor: color.primary,
                paddingBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,}}>
                <Image style={{width: 50,
                    height: 50,
                    marginRight: 10,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: '#51D3C6'}} source={require('../../img/mine/avatar.png')}/>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                        <Text style={{color:'white',marginRight:4,fontWeight: 'bold'}}>宿敌</Text>
                        <Image style={{width:27,height:27}} source={require('../../img/mine/beauty_technician_v15.png')}/>
                    </View>
                    <Text style={{color: 'white', marginTop: 2,fontSize:14}}>个人信息></Text>
                </View>
            </View>
        )
    };


    renderCell(){
        let cells = []
        let dataList = this.getDataList()
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell propStyle={{height:44}} iconUri={data.image} mainTitle={data.title} subTitle={data.subtitle} key={data.title}/>;
                cells.push(cell)
            }
            cells.push(<SpaceView key={i} />)
        }

        return (
            <View style={{flex: 1}}>
                {cells}
            </View>
        )
    };

    render(){
        return(
            <View style={{backgroundColor:color.paper, flex:1}}>
                <NavigationTopBarMine/>
                <ScrollView>
                    {this.renderHeader()}
                    <SpaceView/>
                    {this.renderCell()}
                </ScrollView>
            </View>
        )
    }


    getDataList() {
        return (
            [
                [
                    {title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png')},
                    {title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png')},
                    {title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png')},
                    {title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png')}
                ],
                [
                    {title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png')},
                    {title: '我的评价', image: require('../../img/mine/icon_mine_comment.png')},
                    {title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png')},
                    {title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png')},
                    {title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png')}
                ],
                [
                    {title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png')},
                    {title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
                ]
            ]
        )
    }
}