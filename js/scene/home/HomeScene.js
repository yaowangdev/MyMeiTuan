import React, {PureComponent} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import screen from "../../common/screen";
import NavigationTopBarHome from "../../widget/NavigationTopBarHome";
import GroupPurchaseCell from "../grouppurchase/GroupPurchaseCell";
import api from "../../api";
import color from "../../style/color";
import HomeMenuView from "./HomeMenuView";

type Props = {
    navigation: any,
}

type State = {
    discounts: Array<Object>,
    dataList: Array<Object>,
    refreshing: boolean,
}


class HomeScene extends PureComponent<State,Props>{
    static navigationOptions = ({navigation}: any) => ({
        header:null
    })

    constructor(props: Props) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }
    }

    componentDidMount(){
        this.requestData()
    }

    requestData = () => {
        this.setState({refreshing:true});
        this.requestDiscount();
        this.requestRecommend();
    }

    requestDiscount = async () => {
        try {
            let response = await fetch(api.discount)
            let json = await response.json();
            let discounts = json.data.map(
                (info)=>{
                    return{

                    }
                }
            );
            this.setState({discounts: discounts})
        } catch (error) {
            alert(error)
        }
    }


    requestRecommend = async ()=>{
        try{
            let response = await fetch(api.recommend)
            let json = await response.json()
            let dataList = json.data.map(
                (info)=>{
                    return{
                        id:info.id,
                        imageUri:info.squareimgurl,
                        title:info.mname,
                        subtitle:`[${info.range}]${info.title}`,
                        price:info.price
                    }
                }
            )
            this.setState({
                dataList:dataList,
                refreshing:false
            })
        }catch (e) {
            this.setState({refreshing: false})
        }
    };

    renderCell = (info : Object)=>{
        return(
            <GroupPurchaseCell info={info.item} OnPress={()=>{}}/>
        )
    };

    mykeyExtractor = (item : Object)=> {
        return item.id;
    };


    renderHeader = () =>{

        return(
            <View>
                <HomeMenuView menuInfos={api.menuInfo} onMenuSelected={this.onMenuSelected} />
            </View>
        )

    };

    render(){
        return(
            <View style={{flex:1,flexDirection:'column',alignItems:'stretch'}}>
                <NavigationTopBarHome leftTitle={'福州'} rightIcon={require('../../img/mine/icon_navigation_item_message_white.png')}/>
                <View style={{flex:1,flexDirection:'column',backgroundColor:color.paper}}>
                    <FlatList
                        data={this.state.dataList}
                        renderItem={this.renderCell}
                        keyExtractor={this.mykeyExtractor}
                        onRefresh={this.requestData}
                        refreshing={this.state.refreshing}
                        ListHeaderComponent={this.renderHeader}
                    />
                </View>
            </View>
        )
    }
}

export default HomeScene;

const styles = StyleSheet.create({
    searchBar:{
        width: screen.width * 0.6,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon:{
        width: 20,
        height: 20,
        margin: 5,
    }
})