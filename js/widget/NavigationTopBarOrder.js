import {PureComponent} from "react";
import React from "react";
import {Text, View} from "react-native";


export default class NavigationTopBarOrder extends PureComponent<{}>{

    render(){
        return(
            <View style={{backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'flex-start',paddingLeft:20}}>
                <Text style={{color:'black',fontSize:20,alignSelf:'center'}}>订单</Text>
            </View>
        )
    }

}