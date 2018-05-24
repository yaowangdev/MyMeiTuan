import React,{PureComponent} from "react";
import {Image, TouchableOpacity} from "react-native";
import {Heading3} from "../../widget/Text";
import screen from "../../common/screen"

type Props = {
    onPress: Function,
    icon: any,
    title: string,
}
export default class HomeMenuItem extends PureComponent<Props>{

    render(){
        return(
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: screen.width / 5,
                height: screen.width / 5,}}

            >
                <Image source={this.props.icon} resizeMode='contain' style={{width: screen.width / 9,
                    height: screen.width / 9,
                    margin: 5,}} />
                <Heading3>
                    {this.props.title}
                </Heading3>
            </TouchableOpacity>
        )
    }

}