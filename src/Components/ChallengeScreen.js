import React, {useEffect, useState} from 'react';
import { SafeAreaView, Image,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Quiz from '../quiz.json';
import Images from './candles/Images';
import SoundEffect from './SoundEffect';
 
const Option = (props) => {
   
    return (
        <TouchableOpacity 
            //style={styles.moduleContainer} 
            style={
                props.selectedOption == props.option ? (!props.correct && props.checked ? styles.errorModuleContainer : styles.selectedModuleContainer  ) : styles.moduleContainer}
            onPress={() => {
                 if (!props.checked) {
                    props.setOption(props.option)
                    props.setAnswer(props.answer);
                 }
            }}
            > 
            <View style={styles.image}>
                <Text style={props.selectedOption != props.option ? styles.order : styles.orderSuccess}>{props.option}</Text>
            </View>
            <View style={styles.description}>
                <Text style={props.selectedOption != props.option ? styles.optionTitle : styles.optionTitleSuccess}>{props.answer}</Text> 
            </View>
        </TouchableOpacity>
    )
}

function check(
    answer, 
    challenge,
    challenges,
    setChallenge, 
    setSubmitted, 
    level, 
    setLevel, 
    checked,
    setChecked,
    score,
    setScore,
    setOption,
    setCorrect,
    option,
    totalItems,
    navigation
    ) {
     
    if (option == "")
        return;

    if (!checked) {

        if (answer == challenge.answer) {
            setScore(parseInt(score) + 1);
            setCorrect(true);  
            SoundEffect.correct();
        }else {
            setCorrect(false);
            SoundEffect.wrong();
        }
            

        return setChecked(true);
    }
    
    const nextLevel = parseInt(level) + 1; 
    if (nextLevel == totalItems) {
        
        return navigation.navigate('Congratulations');
    }
    
    const nextChallenge = challenges[nextLevel]; 
    setChallenge(nextChallenge)
    setLevel(nextLevel);
    setChecked(false);
    setOption('');
    setCorrect('');

}

const Correct = () => {

    return (<View style={styles.flexContainer}>
        <Image style={styles.icon} source={require('../../assets/images/check.png')} /> 
        <Text style={{
            width:'auto', 
            fontFamily:'SouceSansPro-SemiBold',
            fontSize:16,
            color:'#58CC02'
            }}> Good Job!</Text>
    </View>)
}

const Wrong = (correctOption) => {
 
    
    return (<View style={styles.flexContainer}>
        <Image style={styles.icon} source={require('../../assets/images/remove.png')} /> 
        <Text style={{
            width:'auto', 
            fontFamily:'SouceSansPro-SemiBold',
            fontSize:16,
            color:'#FF4B4B'
            } }> Correct answer {correctOption.correctOption}</Text>
    </View>)
}

const ChallengeScreen = ({navigation, route}) => {
    const challenges = Object.values(Quiz.bullish);
    const totalItems = challenges.length;

    const {title} = route.params;
    const [option, setOption] = useState(''); 
    const [answer, setAnswer] = useState(''); 
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(0);
    const [challenge, setChallenge] = useState(challenges[0]);
    const [submitted, setSubmitted] = useState(false); 
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState('');
     
    useEffect(() => {
        navigation.setOptions({title: title });
        
    });
 
    return (
        <SafeAreaView>
            <Image style={styles.guessImage} source={Images[challenge.image]} />
            <View style={styles.flexContainer}>
                <View style={styles.column}>
                    <Text style={{fontFamily:'SourceSansPro-SemiBold'}}>Guest the pattern #{parseInt(level) + 1}/{totalItems}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={{textAlign:'right',fontFamily:'SourceSansPro-SemiBold'}}>Score: {score}/{totalItems}</Text>
                </View>
            </View>
            <View style={{padding:20}}>
                <Option 
                    answer={challenge.options.A}
                    option="A"
                    setOption={setOption}
                    selectedOption={option}
                    setAnswer={setAnswer}
                    checked={checked}
                    correct={correct}
                />
                <Option 
                    answer={challenge.options.B}
                    option="B"
                    setOption={setOption}
                    selectedOption={option}
                    setAnswer={setAnswer}
                    checked={checked}
                    correct={correct}
                />
                <Option 
                    answer={challenge.options.C}
                    option="C"
                    setOption={setOption}
                    selectedOption={option}
                    setAnswer={setAnswer}
                    checked={checked}
                    correct={correct}
                />
                <Option 
                    answer={challenge.options.D}
                    option="D"
                    setOption={setOption}
                    selectedOption={option}
                    setAnswer={setAnswer}
                    checked={checked}
                    correct={correct}
                />
            </View>
            <View style={styles.flexContainer}>
                <View style={styles.column}>
                    <Text>
                    {
                        checked ? (correct ? <Correct /> : <Wrong correctOption={challenge.correctOption} />) : ''
                    }
                    </Text>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity
                            onPress={() => check(
                                answer, 
                                challenge,
                                challenges,
                                setChallenge, 
                                setSubmitted, 
                                level, 
                                setLevel, 
                                checked,
                                setChecked,
                                score,
                                setScore,
                                setOption,
                                setCorrect,
                                option,
                                totalItems,
                                navigation
                            )}
                        >
                        <Text style={option == "" ? styles.defaultButton : (!checked ? styles.successButton : (checked && correct ? styles.successButton : styles.errorButton) )}>
                            {checked ? "Continue" : "Check"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    guessImage: {
        width:'100%',
        height:185,
        marginBottom:30
    },
    flexContainer: {
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
       
    },
    column: {
        width:'50%'
    },
    errorModuleContainer: { 
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20, 
        backgroundColor:'#FF4B4B',
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
    selectedModuleContainer: { 
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20, 
        backgroundColor:'#58CC02',
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
        paddingTop:5,
        paddingBottom:5,
        paddingRight:15,
        paddingLeft:15,
        backgroundColor:'rgba(48, 79, 254, 0.1)',
        borderRadius:10,
        fontSize:18,
        fontFamily:'SourceSansPro-SemiBold'
    },
    description: { 
        marginLeft:10,
        overflow:'hidden',
        flexWrap:'wrap',

        justifyContent:'center',
    },
    optionTitle: {
        fontSize:global.scaleFontSize(18),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
    },
    optionTitleSuccess: {
        fontSize:global.scaleFontSize(18),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
        color:"#fff"
    },
    order: {
        fontFamily:'SourceSansPro-SemiBold'
    },
    orderSuccess: {
        fontFamily:'SourceSansPro-SemiBold',
        color:"#fff"
    },
    defaultButton: {
        textAlign:'center',
        borderWidth:1,
        width:120,
        marginLeft:'auto',
        padding:10,
        borderRadius:20,
        backgroundColor:'#F4F4F5',
        borderColor:'#F4F6F9',
        fontFamily:'SourceSansPro-SemiBold'
    },

    icon: {
        width:16,
        height:16
    },  
    successButton: {
        textAlign:'center',
        borderWidth:1,
        width:120,
        marginLeft:'auto',
        padding:10,
        borderRadius:20,
        backgroundColor:'#58CC02',
        borderColor:'#F4F6F9',
        color:"#fff",
        fontFamily:'SourceSansPro-SemiBold'
    },
    errorButton: {
        textAlign:'center',
        borderWidth:1,
        width:120,
        marginLeft:'auto',
        padding:10,
        borderRadius:20,
        backgroundColor:'#FF4B4B',
        borderColor:'#F4F6F9',
        fontFamily:'SourceSansPro-SemiBold',
        color:'#fff'
    }
});

export default ChallengeScreen;