import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet,TouchableOpacity, Image } from 'react-native';
import Images from './candles/Images';
import { AdMobInterstitial } from 'react-native-admob'
const Lessons = (props) => {

    let elements = [];  
    const modules = props.modules;
    const module = props.module;
    const search = props.search;
    const navigation = props.navigation;
  
    for (var key in modules[module]['candles']) {
        
        const pattern = modules[module]['candles'][key];
        const image = Images[pattern.page]
        
        const title = key;
 
        if ((key.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) >-1) {
            elements.push(
                <TouchableOpacity  
                    onPress={() => {
                        navigation.navigate('Pattern', {
                            title: title, 
                            module: module,  
                            pageTitle: "Bullish Candlestick Patterns",
                            level: 2,
                            page:pattern.page,
                            modules:modules 
                        }); 
                    }}
                    key={key}>
                    <View style={styles.lessonWrapper} >
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={image} />
                        </View>
                        <View style={styles.descriptionWrapper}>
                            <Text style={styles.lessonHeader}>{key}</Text>
                            <Text style={styles.lessonSub}>{(pattern.slug).substring(0,76) + '...'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }      

    useEffect(() => {props.setTotal(elements.length);})
    return elements;
}
const LessonScreen = ({navigation,route}) => {
    const {title, module, modules} = route.params;
    const details = modules[module].details;
    const [search, setSearch] = useState(''); 
    const [total, setTotal] = useState(''); 
    AdMobInterstitial.setAdUnitID('ca-app-pub-4118987136087583/2259798849'); 

    useEffect(() => {
        navigation.setOptions({title: title});
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    })
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput 
                    style={styles.searchBar} 
                    placeholder='Search...'  
                    theme={{colors: {primary: 'red', underlineColor: 'transparent'}}}
                    underlineColor='transparent'
                    onChangeText={(value) => { setSearch(value) }}
                    />
                <Text style={styles.heading}>{title}</Text>
                <Text style={styles.p}>{details}</Text>

                <Text style={styles.subHeading}>{ search == '' ? total + ' Patterns' : total + ' results for "'+search+'"'}</Text>
                <Lessons 
                    search={search} 
                    module={module}
                    modules={modules}
                    navigation={navigation}
                    setTotal={setTotal}
                />
            </View>
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
        height:50,
        paddingLeft:15
    },
    heading: {
        fontSize:22,
        fontFamily:'SourceSansPro-SemiBold',
        marginBottom:10
    },
    subHeading: {
        fontSize:22,
        fontFamily:'SourceSansPro-SemiBold',
        marginBottom:30,
        marginTop:15
    },  
    lessonWrapper: {
        borderRadius:20,
        padding:20, 
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:20, 
        width:'100%',
        shadowColor:'rgba(90, 108, 234, 0.5)',
        shadowOffset:{width:0,height:1},
        elevation:22, 
        borderWidth:1,
        shadowRadius:16,
        borderColor:'#F4F6F9'
    },
    lessonHeader: {
        fontFamily:'SourceSansPro-SemiBold',
        lineHeight:36
    },
    lessonSub: {
        fontSize:14,
        fontFamily:'SourceSansPro-Regular'
    },  
    p: {
        marginBottom:25
    },  
    imageWrapper: {  
        width:65,
        marginRight:10
    },
    image: {
        width:60,
        height:60
    },
    descriptionWrapper: {
        width:'auto',
        flex:1
       
    } 
});