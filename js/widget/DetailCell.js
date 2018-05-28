import {PureComponent} from "react";
import React from "react";
import {TouchableOpacity, View} from "react-native";
import Separator from "./Separator";


export default class DetailCell extends PureComponent{

    render(){
        return(
            <View>
                <TouchableOpacity>
                    <View>


                    </View>

                    <Separator/>
                </TouchableOpacity>
            </View>

        )
    }
}