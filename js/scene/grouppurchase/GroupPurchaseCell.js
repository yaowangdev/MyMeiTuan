import React,{PureComponent} from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {Heading2, Paragraph} from "../../widget/Text";
import color from "../../style/color";

type Props={
    info:Object,
    OnPress:Function
}


export default class GroupPurchaseCell extends PureComponent<Props>{

    render(){
        let info = this.props.info;
        let imageUri = info.imageUri.replace('w.h','160.0');
        return(
            <View>
                <TouchableOpacity style={{flexDirection:'row',padding:10,backgroundColor:'white'}} activeOpacity={0.8}>
                    <Image style={{width:80,height:80,borderRadius:5}} source={{uri:imageUri}}/>
                    <View style={{flex:1,paddingLeft:20,paddingRight:10}}>
                        <Heading2>{info.title}</Heading2>
                        <Paragraph numberOfLines={0} style={{marginTop: 8,color:'#777777'}}>{info.subtitle}</Paragraph>
                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                            <Heading2 style={{color:color.primary}}>{info.price}元</Heading2>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

}