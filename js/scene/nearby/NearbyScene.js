import React,{PureComponent} from "react";
import {View} from "react-native";
import NavigationTopBarNearby from "../../widget/NavigationTopBarNearby";
import ScrollableTabView from "react-native-scrollable-tab-view";
import NearbyListScene from "./NearbyListScene";
import color from "../../style/color";


export default class NearbyScene extends PureComponent{
    static navigationOptions = ({navigation}: any) => ({
        header:null
    })

    render(){
        let titles = ['享美食', '住酒店', '爱玩乐', '全部']
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲'],
            []
        ]
        return(
            <View style={{backgroundColor:'yellow', flex:1}}>

                <NavigationTopBarNearby/>
                <ScrollableTabView
                    style={{flex: 1,backgroundColor: color.paper}}
                    tabBarBackgroundColor='white'
                    tabBarActiveTextColor='#FE566D'
                    tabBarInactiveTextColor='#555555'
                    tabBarTextStyle={{fontSize: 14,marginTop: 13,}}
                    tabBarUnderlineStyle={{backgroundColor: '#FE566D'}}
                    // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
                >
                    {titles.map((title, i) => (
                        <NearbyListScene
                            tabLabel={titles[i]}
                            key={i}
                            types={types[i]}
                        />
                    ))}
                </ScrollableTabView>
            </View>
        )
    }
}