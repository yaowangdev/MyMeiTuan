import {PureComponent} from "react";
import React from "react";
import {View} from "react-native";
import color from "../style/color";
import screen from "../common/screen"


export default class Separator extends PureComponent{

    render(){
        return(
            <View style={{width: screen.width,
                height: screen.onePixel,
                backgroundColor: color.border}}/>
        )
    }

}