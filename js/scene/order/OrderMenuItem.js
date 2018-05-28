import {PureComponent} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import screen from "../../common/screen";

type Props={
    title:any,
    iconUri:string,
}
export default class OrderMenuItem extends PureComponent<Props>{


    render(){
        return(
            <View style={{
                backgroundColor:'white',
                justifyContent: 'center',
                alignItems: 'center',
                width: screen.width / 4,
                height: screen.width / 5,}}>
                <TouchableOpacity style={{flexDirection:'column',justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Image style={{width:30,height:30}} resizeMode='contain' source={this.props.iconUri}/>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>
            </View>

        )
    }

}