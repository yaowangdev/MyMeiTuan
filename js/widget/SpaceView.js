import {PureComponent} from "react";
import {View} from "react-native";
import React from "react";
import color from "../style/color";


export default class SpaceView extends PureComponent<{}>{

    render(){
        return(
            <View style={{height:14,backgroundColor:color.paper}}/>
        )
    }

}