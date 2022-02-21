import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Candles from './candles/Candles';

const PatternScreen = ({navigation, route}) => {
    const {pattern, title } = route.params; 
    const DescriptionToRender = Candles[pattern.page]

    useEffect(() => {
        navigation.setOptions({title: title })
    });
    
    return (
        <SafeAreaView>
            <DescriptionToRender />
        </SafeAreaView>
    )
}

export default PatternScreen;