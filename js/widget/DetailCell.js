import {PureComponent} from "react";
import React from "react";
import {Image, Text, TouchableOpacity, View, ViewPropTypes} from "react-native";
import Separator from "./Separator";

type Props ={
    iconUri : any,
    mainTitle : string,
    subTitle : string,
    propStyle : ViewPropTypes.style,
}

export default class DetailCell extends PureComponent<Props>{

    render(){
        return(
            <View style={{backgroundColor:'white'}}>
                <TouchableOpacity>
                    <View style={[{flexDirection:'row',alignItems:'center'},this.props.propStyle]}>
                        <Image style={{width:30,height:30}} source={this.props.iconUri}/>
                        <Text style={{color:'black',fontSize:14,marginLeft:14}}>{this.props.mainTitle}</Text>
                        <View style={{backgroundColor:'white',flex:1}}/>
                        <Text style={{color:'#777777',fontSize:14}}>{this.props.subTitle}</Text>
                        <Image style={{width:14,height:14,marginRight:14}} source={require('../img/public/cell_arrow.png')}/>
                    </View>
                    <Separator/>
                </TouchableOpacity>
            </View>
        )
    }
}