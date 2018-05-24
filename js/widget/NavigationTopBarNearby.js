import {PureComponent} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";


export default class NavigationTopBarNearby extends PureComponent{

    render(){
        return(
            <View style={{backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
                    <Image style={{width:13,height:16,margin:3}} source={require('../img/public/icon_food_merchant_address.png')}/>
                    <Text style={{color:'#777777',fontSize: 15}}>福建 鼓楼</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,height:30,flexDirection:'row',marginRight:30,marginLeft:30,justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',borderRadius:19}}>
                    <Image style={{width: 20,height: 20,margin: 5,}} source={require('../img/home/search_icon.png')}/>
                    <Text style={{color:'#777777',fontSize: 15}}>找附近的吃喝玩乐</Text>
                </TouchableOpacity>
            </View>
        )
    }
}