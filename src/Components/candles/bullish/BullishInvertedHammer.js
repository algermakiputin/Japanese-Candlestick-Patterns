import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishInvertedHammer() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/inverted_hammer.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>An inverted hammer indicates that buyers are putting pressure on the market and signals a potential trend reversal from a downtrend. Buyers push the prices up during the trading session, however, the sellers are also trying to push the prices down. Fortunately, the buyers take over and manage to close near the opening price. This market movement forms a candlestick with a long upper shadow with a small body. As its name entails it’s just an inverted version of the hammer candlestick pattern.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Little or no lower shadow.")}
            {styles.bullet("Open and close price is very close to each other, forming a very small candlestick body.")}
            {styles.bullet("The upper shadow is about twice the size of it's body.")}
                
        </View>
        
    )
}

