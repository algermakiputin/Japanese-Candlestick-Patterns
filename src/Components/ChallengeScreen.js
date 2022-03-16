import React, {useEffect} from 'react';
import { SafeAreaView, Image,Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Option = (props) => {

    return (
        <TouchableOpacity 
            style={styles.moduleContainer} 
            > 
            <View style={styles.image}>
                <Text style={styles.order}>{props.order}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.lessonTitle}>{props.answer}</Text> 
            </View>
        </TouchableOpacity>
    )
}

const ChallengeScreen = ({navigation, route}) => {
    const {title} = route.params;
   
    useEffect(() => {
        navigation.setOptions({title: title });
    });
    return (
        <SafeAreaView>
            <Image style={styles.guessImage} source={require('../../assets/images/candles/bullish/breakaway.png')} />
            <View style={styles.flexContainer}>
                <View style={styles.column}>
                    <Text>Guest the pattern #1</Text>
                </View>
                <View style={styles.column}>
                    <Text style={{textAlign:'right'}}>Score: 0/21</Text>
                </View>
            </View>
            <View style={{padding:20}}>
                <Option 
                    answer="Three White Soldiers"
                    order="A"
                />
                <Option 
                    answer="Three White Soldiers"
                    order="B"
                />
                <Option 
                    answer="Three White Soldiers"
                    order="C"
                />
                <Option 
                    answer="Three White Soldiers"
                    order="D"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    guessImage: {
        width:'100%',
        height:175
    },
    flexContainer: {
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    column: {
        width:'50%'
    },
    moduleContainer: { 
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20, 
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginBottom:10, 
        shadowColor:'rgba(90, 108, 234, 0.5)',
        shadowOffset:{width:0,height:1},
        elevation:24, 
        borderWidth:1,
        shadowRadius:16,
        borderColor:'#F4F6F9' 
    },
    image: { 
        justifyContent:'center',
    },
    description: { 
        marginLeft:10,
        overflow:'hidden',
        flexWrap:'wrap',

        justifyContent:'center',
    },
    lessonTitle: {
        fontSize:global.scaleFontSize(18),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
    
    },
    order: {
        paddingTop:5,
        paddingBottom:5,
        paddingRight:15,
        paddingLeft:15,
        backgroundColor:'#304FFE',
        opacity:0.1,
        borderRadius:10,
        fontSize:18,
        fontFamily:'SourceSansPro-SemiBold',
        color:'#000'
    }
});

export default ChallengeScreen;