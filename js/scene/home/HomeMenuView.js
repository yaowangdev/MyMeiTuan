import React , {PureComponent}from "react";
import {ScrollView, View} from "react-native";
import PageControl from "react-native-page-control";
import color from "../../style/color";
import HomeMenuItem from "./HomeMenuItem";
import screen from "../../common/screen"


type Props = {
    menuInfos: Array<Object>,
    onMenuSelected: Function,
}

type State = {
    currentPage: number
}


export default class HomeMenuView extends PureComponent<Props,State>{

    constructor(props: Object) {
        super(props)

        this.state = {
            currentPage: 0
        }
    }


    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / screen.width)

        console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage)
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }

    render(){
        let {menuInfos, onMenuSelected} = this.props

        let menuItems = menuInfos.map(
            (info, i) => (
                <HomeMenuItem
                    key={info.title}
                    title={info.title}
                    icon={info.icon}
                    onPress={() => {
                        /*onMenuSelected && */onMenuSelected(i)
                    }}
                />
            )
        );

        let menuViews = [];
        let pageCount = Math.ceil(menuItems.length / 10)

        for (let i = 0; i < pageCount; i++) {
            let items = menuItems.slice(i * 10, i * 10 + 10)

            let menuView = (
                <View style={{flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: screen.width}} key={i}>
                    {items}
                </View>
            );
            menuViews.push(menuView)
        }

        return(
            <View style={{backgroundColor:'white'}}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e)=>{this.onScroll(e)}}
                >
                    <View style={{flexDirection: 'row'}}>
                        {menuViews}
                    </View>
                </ScrollView>
                <PageControl
                    style={{margin:10}}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={color.primary}
                    indicatorSize={{width: 8, height: 8}}
                />
            </View>

        )
    }
}