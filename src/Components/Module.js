import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import './Global';

const moduleImages = [
    require('../../assets/images/bullcandles.png'),
    require('../../assets/images/bearcandles.png'),
    require('../../assets/images/continuationcandles.png')
]
const modules = require('../modules.json');

const Module = (props) => {

    return(
        <TouchableOpacity 
            style={styles.moduleContainer}
            onPress={() => {
                
                global.counter++;
                global.showAd();  
                props.navigation.navigate('Lesson', { 
                    title: props.title, 
                    module:props.trend,
                    modules: modules
                });
            }}
            > 
            <View style={styles.image}>
                <Image source={moduleImages[props.image]} />
            </View>
            <View style={styles.description}>
                <Text style={styles.lessonTitle}>{props.title}</Text>
                <Text style={styles.lessonSub}>{Object.keys(modules[props.trend].candles).length} Lessons</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    moduleContainer: { 
        borderRadius:20,
        padding:20, 
        backgroundColor:'#2e2d2e',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginBottom:20,  
    },
    image: {
        width:60,
        height:60
    },
    description: { 
        marginLeft:10,
        overflow:'hidden',
        flexWrap:'wrap'
    },
    lessonTitle: {
        fontSize:global.scaleFontSize(22),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
        color:"#fff"
    },
    lessonSub: {
        fontSize:global.scaleFontSize(14),
        color:"#fff"
    }
});

export default Module;