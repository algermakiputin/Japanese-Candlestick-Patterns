import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Candles from './candles/Candles';
import BottomNavigation from './BottomNavigation';

const PatternScreen = ({navigation, route}) => {
    const {pattern, title } = route.params; 
    const DescriptionToRender = Candles[pattern.page]
 
    useEffect(() => {
        navigation.setOptions({title: title })
    });
    
    return (
        <SafeAreaView>
            <ScrollView>
                <DescriptionToRender />
                <BottomNavigation />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatternScreen;