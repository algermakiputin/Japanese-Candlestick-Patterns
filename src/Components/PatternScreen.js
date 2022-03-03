import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Candles from './candles/Candles';
import BottomNavigation from './BottomNavigation'; 

const PatternScreen = ({navigation, route}) => {
    const {page, title, modules, module } = route.params; 
    const ref = React.useRef(null);
     
    const DescriptionToRender = Candles[page];
    const keys = Object.keys(modules[module]['candles']);
    const index = keys.indexOf(title);
    const nextPatternIndex = keys[index+1];
    const prevPatternIndex = keys[index-1];
 
    let nextPage = modules[module]['candles'][nextPatternIndex];
    let previousPage = modules[module]['candles'][prevPatternIndex];
    
    nextPage = nextPage ? nextPage.page : '';
    previousPage = previousPage ? previousPage.page : '';
 
    
    useEffect(() => {
        ref.current.scrollTo({ y: 0, animated: true })
        navigation.setOptions({title: title });
        
    });
    
    return (
        <SafeAreaView>
            <ScrollView ref={ref} >
                <DescriptionToRender />
                <BottomNavigation
                    nextPage={nextPage}
                    previousPage={previousPage}
                    navigation={navigation}
                    title={title}
                    page={page}
                    title={title}
                    modules={modules}
                    module={module}
                    nextName={nextPatternIndex}
                    previousName={prevPatternIndex}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatternScreen;