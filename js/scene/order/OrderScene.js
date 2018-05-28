import React,{PureComponent} from "react";
import {FlatList, View} from "react-native";
import NavigationTopBarOrder from "../../widget/NavigationTopBarOrder";
import color from "../../style/color";
import {RefreshState} from "react-native-refresh-list-view";
import RefreshListView from "react-native-refresh-list-view";
import api from "../../api";
import OrderMenuItem from "./OrderMenuItem";
import GroupPurchaseCell from "../grouppurchase/GroupPurchaseCell";
import DetailCell from "../../widget/DetailCell";
import SpaceView from "../../widget/SpaceView";
import Separator from "../../widget/Separator";

type State = {
    data: Array<Object>,
    refreshState: number,
}

export default class OrderScene extends PureComponent<State>{
    static navigationOptions = ({navigation}: any) => ({
        header:null
    });

    constructor(props){
        super(props)
        this.state = {
            data:[],
            refreshState: RefreshState.Idle,
        }
    }

    componentDidMount() {
        this.requestData()
    }


    renderCell=(rowData:any)=>{
        return(
            <GroupPurchaseCell
                info={rowData.item}
                onPress={() => {
                    this.props.navigation.navigate('GroupPurchase', {info: rowData.item})
                }}
            />
        )
    };

    mykeyExtractor=(item: Object)=>{
        return item.id
    };

    requestData= async () => {
        try {
            this.setState({refreshState: RefreshState.HeaderRefreshing})
            let response = await fetch(api.recommend)
            let json = await response.json()
            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUri: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })
            // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
            dataList.sort(() => {return 0.5 - Math.random()})

            this.setState({
                data: dataList,
                refreshState: RefreshState.NoMoreData,
            })
        }catch (e) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    };

    renderHeader=()=>{

        let items = api.orderMenuInfo.map(
            (info, i) => (
                <OrderMenuItem
                    key={info.title}
                    title={info.title}
                    iconUri={info.icon}
                    onPress={() => {

                    }}
                />
            )
        );

        return(
            <View>
                <DetailCell mainTitle='我的订单' subTitle='全部订单' propStyle={{height:38}}/>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {items}
                </View>
                <SpaceView/>
                <DetailCell mainTitle='我的收藏' subTitle='查看全部' propStyle={{height:38}}/>
            </View>

        )
    };

    render(){
        return(
            <View style={{flex:1,flexDirection:'column',alignItems:'stretch'}}>
                <NavigationTopBarOrder/>
                <Separator/>
                <View style={{flex:1,flexDirection:'column',backgroundColor:color.paper}}>
                    <RefreshListView
                        data={this.state.data}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={this.renderCell}
                        keyExtractor={this.mykeyExtractor}
                        refreshState={this.state.refreshState}
                        onHeaderRefresh={this.requestData}
                    />
                </View>
            </View>
        )
    }
}