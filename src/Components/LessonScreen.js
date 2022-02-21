import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet,TouchableOpacity, Image } from 'react-native';


const Lessons = (props) => {

    let elements = [];  
    const modules = props.modules;
    const module = props.module;
    const search = props.search;
    const navigation = props.navigation;

    for (var key in modules[module]['candles']) {
        
        const pattern = modules[module]['candles'][key];
        const title = key;

        if ((key.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) >-1) {
            elements.push(
                <TouchableOpacity  
                    onPress={() => {
                        navigation.navigate('LessonPage', {
                            title: title, 
                            module: module,  
                            pageTitle: "Bullish Candlestick Patterns",
                            level: 2,
                            pattern:pattern,
                            modules:modules 
                        }); 
                    }}
                    style={styles.lessonWrapper} 
                    key={key}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={require('../../assets/images/image.png')} />
                    </View>
                    <View style={styles.descriptionWrapper}>
                        <Text style={styles.lessonHeader}>{key}</Text>
                        <Text style={styles.lessonSub}>White candlesticks represent a positive increase in a security's price during the observed period of time.</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }     

    return elements;
}
const LessonScreen = ({navigation,route}) => {
    const {title, module, modules} = route.params;
    const details = modules[module].details;
    const [search, setSearch] = useState(''); 

    useEffect(() => {
        navigation.setOptions({title: title});
    })
    return (
        <ScrollView style={styles.container}>
             <TextInput 
                style={styles.searchBar} 
                placeholder='Search...'  
                theme={{colors: {primary: 'red', underlineColor: 'transparent'}}}
                underlineColor='transparent'
                onChangeText={(value) => { setSearch(value) }}
                />
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.p}>{details}</Text>
            <Lessons 
                search={search} 
                module={module}
                modules={modules}
                navigation={navigation}
            />
        </ScrollView>
    );
}

export default LessonScreen;

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    searchBar: {
        backgroundColor: '#F5F7F9',
        borderRadius:8,
        marginBottom:20,
        padding:15 
    },
    heading: {
        fontSize:22,
        fontFamily:'SourceSansPro-SemiBold',
        marginBottom:10
    },
    lessonWrapper: {
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15,
        borderWidth:1,
        borderColor:'#F4F6F9',
        padding:20

    },
    imageWrapper: { 
        flex:1
    },
    descriptionWrapper: {
        flex:3
    } 
});