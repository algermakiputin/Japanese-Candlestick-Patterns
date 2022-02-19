import React, { useEffect } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

 
const LessonScreen = ({navigation,route}) => {
    const {title, module, modules} = route.params;
    const details = modules[module].details;
 
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
                // onChangeText={(value) => { result(value, module); setSearchValue(value)} }  
                />
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.p}>{details}</Text>
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
        padding:15,
        inputOnFocus: {
            backgroundColor:'red'
        }
    },
    heading: {

    },
    p: {

    }
});