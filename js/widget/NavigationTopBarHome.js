import React ,{PureComponent} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes} from "react-native";
import color from "../style/color";
import {Paragraph} from "./Text";
import screen from "../common/screen";

type Props = {
    leftTitle?:string,
    rightIcon?:any,
}

export default class NavigationTopBarHome extends PureComponent<Props>{

    render(){

        return(
            <View style={{height:50,backgroundColor:color.primary,flexDirection:'row',justifyContent:'space-between'}}>
                <Paragraph style={{marginLeft:10,alignSelf:'center'}}>{this.props.leftTitle}</Paragraph>
                <TouchableOpacity style={styles.searchBar2}>
                    <Image source={require('../img/home/search_icon.png')} style={styles.searchIcon2} />
                    <Paragraph style={{color:'#777777'}}>一点点</Paragraph>
                </TouchableOpacity>
                <Image source={this.props.rightIcon} style={{width: 25,height: 25,marginRight: 10,alignSelf:'center'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar2:{
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon2:{
        width: 20,
        height: 20,
        margin: 5,
    }
})