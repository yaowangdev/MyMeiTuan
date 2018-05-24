import React,{PureComponent} from "react";
import RefreshListView, {RefreshState} from "react-native-refresh-list-view";
import api from "../../api";
import NearbyHeaderView from "./NearbyHeaderView";
import GroupPurchaseCell from "../grouppurchase/GroupPurchaseCell";

type Props = {
    types : Array<string>,
}

type States = {
    typeIndex: 0,
    data: [],
    refreshState: RefreshState.Idle,
}

export default class NearbyListScene extends PureComponent<Props,States>{

    constructor(props){
        super(props);
        this.state = {
            typeIndex: 0,
            data: [],
            refreshState: RefreshState.Idle,
        }
    }

    componentDidMount(){
        this.requestFirstPage()
    }

    renderHeader=()=>{
        return (
            <NearbyHeaderView
                titles={this.props.types}
                selectedIndex={this.state.typeIndex}
                onSelected={async (index) => {
                    this.setState({
                        refreshState: RefreshState.HeaderRefreshing,
                    });
                    if (index != this.state.typeIndex) {
                        this.setState({typeIndex:index});
                        let dataList = await this.requestData();
                        this.setState({
                            data: dataList,
                            refreshState: RefreshState.Idle
                        })
                    }
                }}
            />
        )
    };

    renderCell=(rowData: any)=>{
        return (
            <GroupPurchaseCell
                info={rowData.item}
                onPress={() => {
                    this.props.navigation.navigate('GroupPurchase', {info: rowData.item})
                }}
            />
        )
    };

    keyExtractor=(index)=>{
        return index;
    };

    requestFirstPage= async () => {
        try {
            this.setState({refreshState: RefreshState.HeaderRefreshing});
            let dataList = await this.requestData();
            this.setState({
                data: dataList,
                refreshState: RefreshState.Idle,
            })
        }catch (e) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    };

    requestNextPage= async () => {
        try {
            this.setState({refreshState: RefreshState.FooterRefreshing});
            let dataList = await this.requestData();
            this.setState({
                data: [...this.state.data, ...dataList],
                refreshState: this.state.data.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        } catch (error) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    };

    requestData = async () => {
        let response = await fetch(api.recommend);
        let json = await response.json();
        console.log(JSON.stringify(json));
        let dataList = json.data.map((info) => {
            return {
                id: info.id,
                imageUri: info.squareimgurl,
                title: info.mname,
                subtitle: `[${info.range}]${info.title}`,
                price: info.price
            }
        });
        // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
        dataList.sort(() => {return 0.5 - Math.random()});
        return dataList
    };

    render(){
        return(
            <RefreshListView
                data={this.state.data}
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderCell}
                keyExtractor={this.keyExtractor}
                refreshState={this.state.refreshState}
                onHeaderRefresh={this.requestFirstPage}
                onFooterRefresh={this.requestNextPage}
            />
        )
    }

}