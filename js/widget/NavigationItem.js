import React ,{PureComponent}from "react";
import {Image, Text, TouchableOpacity, ViewPropTypes,StyleSheet} from "react-native";


type Props = {
    iconUrl?: any,
    iconStyle?:ViewPropTypes.style,
    title?: string,
    titleStyle?:ViewPropTypes.style,
    onPress?: Function
}

export default class NavigationItem extends PureComponent<Props>{
    render(){
        let icon = this.props.iconUrl && <Image style={this.props.iconStyle} source={this.props.iconUrl}/>
        let title = this.props.title && <Text style={this.props.titleStyle}>{this.props.title}</Text>
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})