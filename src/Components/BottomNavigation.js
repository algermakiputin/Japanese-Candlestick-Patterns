import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const NextButton = ({nextName,navigation,page, title, modules, module}) => {
    
    const nav = nextName ? <View style={styles.rightNav}><Text  style={styles.text}>{nextName} &raquo;</Text></View> : null;
   
    return (
        <TouchableOpacity
            onPress={() => {navigation.navigate('Pattern', { 
                            page: page,
                            title: nextName,
                            modules:modules,
                            module:module
                        })}}
        >
            {nav} 
        </TouchableOpacity>
    );
};

const PreviousButton = ({previousName,navigation,page, title, modules, module}) => {
    
    const nav = previousName ? <View style={styles.leftNav}><Text style={styles.text}>&laquo; {previousName}</Text></View> : null;
    return (
        <TouchableOpacity
            onPress={() => {navigation.navigate('Pattern', {
                            title: previousName,
                            page: page, 
                            modules:modules,
                            module:module
                        })}}
        >
            {nav}
        </TouchableOpacity>
    );
};

const BottomNavigation = ({nextName, previousName, nextPage,previousPage, navigation, title, page, module, modules}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.column2}> 
                <PreviousButton 
                    navigation={navigation}
                    title={title}
                    page={previousPage}
                    module={module}
                    modules={modules}
                    previousPage={previousPage}
                    previousName={previousName}
                />
            </View>
            <View style={styles.column1}> 
                <NextButton
                    navigation={navigation}
                    page={nextPage}
                    module={module}
                    modules={modules}
                    nextPage={nextPage}
                    nextName={nextName}
                />
            </View>
        </View>
    );
}

export default BottomNavigation;

const styles = StyleSheet.create({
    container: {
        display:'flex',
        padding:20,
        flexDirection:'row', 
        justifyContent:'space-between',
        marginTop:40,
        marginBottom:10
    }, 
    leftNav: {
        borderRadius:20,
        shadowColor:'rgba(90, 108, 234, 0.25)',
        shadowOffset:{width:0,height:1},
        elevation:24, 
        borderWidth:1,
        shadowRadius:16,
        borderColor:'#F4F6F9',
        padding:10,
        borderWidth:1,
        paddingRight:15,
        paddingLeft:15
    },
    rightNav: {
        borderRadius:20,
        shadowColor:'rgba(90, 108, 234, 0.25)',
        shadowOffset:{width:1,height:1},
        elevation:24, 
        borderWidth:1,
        shadowRadius:16,
        borderColor:'#F4F6F9',
        padding:10,
        borderWidth:1,
        paddingLeft:15,
        paddingRight:15
    },
    text: {
        fontFamily:'SourceSansPro-SemiBold',
        fontSize:18
    }
});