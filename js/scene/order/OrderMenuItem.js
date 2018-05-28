import {PureComponent} from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import React from "react";

type Props={
    title:any,
    iconUri:string,
}
export default class OrderMenuItem extends PureComponent<Props>{


    render(){
        return(
            <TouchableOpacity style={{flexDirection:'column'}}>
                <Image source={this.props.iconUri}/>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }

}