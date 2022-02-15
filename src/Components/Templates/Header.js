import React from "react";
import { View, Image, Text, StyleSheet } from "react-native"; 

const images = {
    logo: require('../../assets/images/logo.png'),
    back: require('../../../assets/images/back.png')
}   

export default function Header() {
  
    return ( 
        <View style={styles.container}>
         
            <Image style={{flex:1}} source={images.logo} />
        
            <Text style={{flex:2}}>Hello Worldqweqwe</Text>
            <Text style={{flex:3}}>Hi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    }
});

