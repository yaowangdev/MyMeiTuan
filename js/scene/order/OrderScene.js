import React,{PureComponent} from "react";
import {FlatList, View} from "react-native";
import NavigationTopBarOrder from "../../widget/NavigationTopBarOrder";
import color from "../../style/color";
import {RefreshState} from "react-native-refresh-list-view";
import RefreshListView from "react-native-refresh-list-view";

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


    renderCell=()=>{

    };

    mykeyExtractor=()=>{

    };

    requestData=()=>{

    };

    renderHeader=()=>{
        return(


        )
    };

    render(){
        return(
            <View style={{flex:1,flexDirection:'column',alignItems:'stretch'}}>
                <NavigationTopBarOrder/>
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