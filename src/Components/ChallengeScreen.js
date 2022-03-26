import React, {useEffect, useState} from 'react';
import { SafeAreaView, Image,Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Quiz from '../quiz.json';
import Images from './candles/Images';
import SoundEffect from './SoundEffect';

const height = Dimensions.get('window').height;

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

    var newScore = score;
    if (!checked) {

        if (answer == challenge.answer) {
            newScore = parseInt(score) + 100;
            setScore(newScore);
            setCorrect(true);  
            SoundEffect.correct(true);
        }else {
            setCorrect(false);
            SoundEffect.wrong(true);
        }
        
        return setChecked(true);
    }
    
    const nextLevel = parseInt(level) + 1; 

    if (nextLevel == totalItems) { 
        return navigation.navigate('Congratulations', {'score': newScore});
    } 
        
    const nextChallenge = challenges[nextLevel]; 
    setChallenge(nextChallenge)
    setLevel(nextLevel);
    setChecked(false);
    setOption('');
    setCorrect('');

}

const Correct = () => {

    const words = [
        'Good Job!',
        'Exactly Right!',
        'Excellent!',
        'Fabulous!',
        'Fantastic!',
        'Sensational!',
        'Outstanding!',
        'Wonderful!',
        'Outstanding!'
    ];
    const index = Math.floor(Math.random() * 9); 
    return (<View style={styles.flexContainer}>
        <Image style={styles.icon} source={require('../../assets/images/check.png')} /> 
        <Text style={{
            width:'auto', 
            fontFamily:'SouceSansPro-SemiBold',
            fontSize:global.scaleFontSize(16),
            color:'#58CC02'
            }}> {words[index]}</Text>
    </View>)
}

const Wrong = (correctOption) => {
 
    
    return (<View style={styles.flexContainer}>
        <Image style={styles.icon} source={require('../../assets/images/remove.png')} /> 
        <Text style={{
            width:'auto', 
            fontFamily:'SouceSansPro-SemiBold',
            fontSize:18,
            color:'#FF4B4B'
            } }> Correct answer {correctOption.correctOption}</Text>
    </View>)
}

const ChallengeScreen = ({navigation, route}) => {
    const {title, quizChallenge} = route.params;
    const challenges = Object.values(Quiz[quizChallenge]);
    const totalItems = challenges.length;
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
        SoundEffect.correct();
        SoundEffect.wrong();
    });
 
    return (
        <SafeAreaView>
            <ScrollView>
                <Image style={styles.guessImage} source={Images[challenge.image]} />
                <View style={styles.flexContainer}>
                    <View style={styles.column}>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', color:global.headerColor}}>Pattern #{parseInt(level) + 1}/{totalItems}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{textAlign:'right',fontFamily:'SourceSansPro-SemiBold',color:global.headerColor}}>Score: {score}</Text>
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
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    guessImage: {
        width:'100%',
        height:height / 3.2,
        marginBottom:30
    },
    flexContainer: {
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
       
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
        borderColor:'#2e2d2e' 
    },
    moduleContainer: { 
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20, 
        backgroundColor:'#2e2d2e',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginBottom:10,  
        borderWidth:1, 
        borderColor:'#2e2d2e' 
    },
    image: { 
        justifyContent:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingRight:15,
        paddingLeft:15,
        backgroundColor:'rgba(48, 79, 254, 0.1)',
        borderRadius:10,
        fontSize:global.scaleFontSize(18),
        fontFamily:'SourceSansPro-SemiBold'
    },
    description: { 
        marginLeft:10,
        overflow:'hidden',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    optionTitle: {
        fontSize:global.scaleFontSize(19),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
        color:global.paragraphColor
    },
    optionTitleSuccess: {
        fontSize:global.scaleFontSize(19),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
        color:"#fff"
    },
    order: {
        fontFamily:'SourceSansPro-SemiBold',
        color:"#304FFE"
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
        color:"#fff",
        backgroundColor:'#2e2d2e',
        borderColor:'#2e2d2e',
        fontFamily:'SourceSansPro-SemiBold',
        fontSize:global.scaleFontSize(19)
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
        borderColor:'#2e2d2e',
        color:"#fff",
        fontFamily:'SourceSansPro-SemiBold',
        fontSize:global.scaleFontSize(19)
    },
    errorButton: {
        textAlign:'center',
        borderWidth:1,
        width:120,
        marginLeft:'auto',
        padding:10,
        borderRadius:20,
        backgroundColor:'#FF4B4B',
        borderColor:'#2e2d2e',
        fontFamily:'SourceSansPro-SemiBold',
        color:'#fff',
        fontSize:global.scaleFontSize(19)
    }
});

export default ChallengeScreen;