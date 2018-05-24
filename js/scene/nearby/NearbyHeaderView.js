import React , {PureComponent} from "react";
import {TouchableOpacity, View} from "react-native";
import {Paragraph} from "../../widget/Text";
import screen from "../../common/screen";
import color from "../../style/color";

type Props = {
    titles: Array<string>,
    selectedIndex: number,
    onSelected: Function,
}
export default class NearbyHeaderView extends PureComponent<Props>{

    render(){
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {this.props.titles.map((title,i)=>(
                        <TouchableOpacity
                            onPress={() => this.props.onSelected(i)}
                            key={i}
                            style={{
                                width: screen.width / 4 - 10,
                                marginLeft: 8,
                                marginTop: 5,
                                marginBottom: 5,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15,
                                borderWidth: screen.onePixel,
                                borderColor: color.border,
                                backgroundColor:this.props.selectedIndex == i ? '#FE566D' : 'white'
                            }}>
                            <Paragraph style={{color: this.props.selectedIndex == i ? 'white' : '#555555'}}>
                                {title}
                            </Paragraph>
                        </TouchableOpacity>
                    )
                )}
            </View>
        )
    }

}