import React from "react";
import { StyleSheet, View, Text } from "react-native";
import './Global'

const Styles = StyleSheet.create({
    container: {
        padding:20, 
    },  
    p: {
        fontSize:global.scaleFontSize(18),
        lineHeight:24,
        color:'#000',
        marginBottom:15 
    },
    list: {
        fontSize:global.scaleFontSize(18),
        lineHeight:24,
        color:'#000',
        marginBottom:10
    },
    div: {
       
    },
    subHeading: {
        fontSize:global.scaleFontSize(22),
        fontFamily:'SourceSansPro-SemiBold',
        lineHeight:24,
        marginBottom:20 
    },
    image: {
        width:'100%',
        height:158, 
        margin:'auto',
        marginTop:20,
        marginBottom:40, 
    }, 
    bullet: (text) => {
       
        return(
        <View style={ {
                flexDirection: 'row',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                flex: 1,
                marginVertical: 4
            }}>
            <View style={{width: 15}}>
                <Text>{'\u2022' + " "}</Text>
                </View>
                <View style={{flex: 1}}>
                <Text>{text}</Text>
            </View>
        </View>
        );
    }
})

export default Styles;