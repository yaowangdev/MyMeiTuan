import { AppRegistry } from 'react-native';
import MeiTuan from './js/Main';
import React ,{PureComponent}from "react";


export default class Hello extends PureComponent<{}> {
    render() {
        return (
            <MeiTuan />
        );
    }
}

AppRegistry.registerComponent('MyMeiTuan', () => Hello);
