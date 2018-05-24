import {Text,StyleSheet} from "react-native";
import React from "react";

export function Heading2({style, ...props}: Object) {
    return <Text style={[styles.h2, style]} {...props} />
}
export function Heading3({style, ...props}: Object) {
    return <Text style={[styles.h3, style]} {...props} />
}
export function Paragraph({style, ...props}: Object) {
    return <Text style={[styles.p, style]} {...props} />
}


const styles = StyleSheet.create({
    p:{
        fontSize: 14,
        color: 'white',
    },
    h2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    h3: {
        fontSize: 14,
        color: '#222222',
    },
})