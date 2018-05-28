import {PureComponent} from "react";
import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import color from "../style/color";


export default class NavigationTopBarMine extends PureComponent{

    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'flex-end',height:50,backgroundColor:color.primary,alignItems:'center'}}>
                <TouchableOpacity>
                    <Image style={{width:25,height:25,marginRight:10}} source={require('../img/mine/icon_navigation_item_message_white.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width:25,height:25,marginRight:10}} source={require('../img/mine/icon_navigation_item_set_white.png')}/>
                </TouchableOpacity>
            </View>
        )
    }

}