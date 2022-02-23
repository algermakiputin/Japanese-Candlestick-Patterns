import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
 

const BottomNavigation = () => {
    
    return (
        <View style={styles.container}>
            <View> 
                <Text>test12123</Text>
            </View>
            <View> 
                <Text>Hello World</Text>
            </View>
        </View>
    );
}

export default BottomNavigation;

const styles = StyleSheet.create({
    container: {
        padding:20
    }
});