import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import Images from './candles/Images'; 
import './Global';

const initData = (candles, search) => {

    let data = [];

    for (var key in candles) {
        if ((key.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) >-1) {
            data.push({
                key: key
            });
        }
    } 
 
    return data;
}

const handleSearch = (setData, candles, search, setSearch,setTotal) => {
    
    const data = initData(candles, search);
    setTotal(data.length);
    setSearch(search);
    setData(data);
}

const Header = ({title, details, search, total, setSearch, setData, candles, setTotal}) => {

    return(
        <View style={{paddingLeft:20,paddingRight:20}}>
            <TextInput 
                style={styles.searchBar} 
                placeholder='Search...'  
                placeholderTextColor='#CBCFD4'
                theme={{colors: {primary: 'red', underlineColor: 'transparent'}}}
                underlineColor='transparent'
                onChangeText={(value) => {handleSearch(setData, candles, value, setSearch,setTotal)}}
                keyboardType="default" 
                />
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.p}>{details}</Text>

            <Text style={styles.subHeading}>{ search == '' ? total + ' Patterns' : total + ' results for "'+search+'"'}</Text>
        </View>
    )
}

const LessonScreen = ({navigation,route}) => {
    const {title, module, modules} = route.params;
    
    const details = modules[module].details;
    const candles = modules[module]['candles'];
   
    const [search, setSearch] = useState(''); 
    const [total, setTotal] = useState();  
    const [data, setData] = useState(); 
       
    useEffect(() => {
        const initialData = initData(candles, search);
        setData(initialData)
        setTotal(initialData.length) 
         
    }, [])
    return (
        <SafeAreaView style={styles.container}>  
            <FlatList
                data={data}
                renderItem={({item}) => {
                    const pattern = modules[module]['candles'][item.key];
                    const image = Images[pattern.page]
                    return (
                        <View style={{paddingLeft:20, paddingRight:20}}>
                            <TouchableOpacity  
                                onPress={() => { 

                                    global.counter++; 
                                    global.showAd(); 
                                    navigation.navigate('Pattern', {
                                        title: item.key, 
                                        module: module,  
                                        pageTitle: "Bullish Candlestick Patterns", 
                                        page:pattern.page,
                                        modules:modules 
                                    }); 
                                    
                                }}
                                style={styles.lessonWrapper}> 
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.image} source={image} />
                                </View>
                                <View style={styles.descriptionWrapper}>
                                    <Text style={styles.lessonHeader}>{item.key}</Text>
                                    <Text style={styles.lessonSub}>{(pattern.slug).substring(0,76) + '...'}</Text>
                                </View> 
                            </TouchableOpacity>
                        </View>
                    );
                }}
                ListHeaderComponent={<Header
                        title={title}
                        total={total}
                        details={details}
                        search={search}
                        setSearch={setSearch}
                        setData={setData}
                        candles={candles}
                        setTotal={setTotal}
                    />}
            />
        </SafeAreaView>
    );
}

export default LessonScreen;

const styles = StyleSheet.create({
    container: { 
    },
    searchBar: {
        backgroundColor: '#2e2d2e',
        borderRadius:8,
        marginBottom:20,
        height:50,
        paddingLeft:15,
        color:"#fff",
        marginTop:15
    },
    heading: {
        fontSize:global.scaleFontSize(24),
        fontFamily:'SourceSansPro-SemiBold',
        marginBottom:10,
        color:global.headerColor
    },
    subHeading: {
        fontSize:global.scaleFontSize(24),
        fontFamily:'SourceSansPro-SemiBold',
        marginBottom:30,
        marginTop:15,
        color:global.headerColor
    },  
    lessonWrapper: { 
        borderRadius:20,
        padding:20, 
        backgroundColor:'#2e2d2e',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:20, 
        width:'100%'
    },
    lessonHeader: {
        fontFamily:'SourceSansPro-SemiBold',
        lineHeight:36,
        fontSize: global.scaleFontSize(22),
        color:global.headerColor
    },
    lessonSub: {
        fontSize:global.scaleFontSize(16),
        fontFamily:'SourceSansPro-Regular',
        color:global.paragraphColor
    },  
    p: {
        marginBottom:25,
        color:global.paragraphColor,
        fontSize:global.scaleFontSize(19)
    },  
    imageWrapper: {  
        width:70,
        marginRight:10
    },
    image: {
        width:70,
        height:70
    },
    descriptionWrapper: {
        width:'auto',
        flex:1
       
    } 
});