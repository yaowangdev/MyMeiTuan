/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, View} from "react-native";
import {StackNavigator,TabNavigator,TabBarBottom} from "react-navigation";
import HomeScene from "./scene/home/HomeScene";
import MineScene from "./scene/mine/MineScene";
import NearbyScene from "./scene/nearby/NearbyScene";
import OrderScene from "./scene/order/OrderScene";
import TabBarItem from "./widget/TabBarItem";
import color from "./style/color";
import {StatusBar} from "react-native";


const lightContentScenes = ['Home', 'Mine'];

function getCurrentRouteName(navigationState: any) {
    if (!navigationState) {
        return null
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route)
    }
    return route.routeName
}


export default class MeiTuan extends PureComponent<{}>{
    constructor() {
        super();
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return(
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            let i = lightContentScenes.indexOf(currentScene);
                            console.log('currentScene='+i);
                            if ( i >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        )
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '团购',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tab/tabbar_homepage.png')}
                        selectedImage={require('./img/tab/tabbar_homepage_selected.png')}
                    />
                )
            }),
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tab/tabbar_merchant.png')}
                        selectedImage={require('./img/tab/tabbar_merchant_selected.png')}
                    />
                )
            }),
        },

        Order: {
            screen: OrderScene,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tab/tabbar_order.png')}
                        selectedImage={require('./img/tab/tabbar_order_selected.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScene,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tab/tabbar_mine.png')}
                        selectedImage={require('./img/tab/tabbar_mine_selected.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: color.primary,
            inactiveTintColor: color.gray,
            style: {backgroundColor: '#ffffff'},
        },
    }

);



const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
        // Web: {screen: WebScene},
        // GroupPurchase: {screen: GroupPurchaseScene},
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.primary }
            headerBackTitle: null,
            headerTintColor: color.primary,
            showIcon: true,
        },
    }
);




const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
    },
    navigator:{
        backgroundColor:'black',
        flex:1
    }
});
