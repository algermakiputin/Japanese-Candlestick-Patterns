import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, Image } from "react-native";
import Styles from "./SingelePageStyles";

const styles = Styles;
const Introduction = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Image style={{
                width:'100%',
                height:180, 
                margin:'auto',
                marginTop:20,
                marginBottom:40, 
            }} source={require('../../assets/images/candlestick.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Candlestick chart patterns are thought to have been developed in the 18th century by a wealthy Japanese businessman named Munehisa Homma to analyze the price movement of rice contracts. Homma found out that while there is an underlying connection between price and supply and demand of rice, the market is also influenced by people’s emotions.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>Candlestick formation</Text>
            <Text style={styles.p}>A candlestick consists of a body, upper wick, and lower wick that represents the market opening price, closing price, high and low price.</Text>
            {styles.bullet("Body — The candlestick body can either be red or green. The red candle body represents a stock price that closes lower than the opening price at the end of the trading session. While the green candle body represents a stock's price is pushing higher and closes greater than the opening price at the end of the trading session.")}
            {styles.bullet('Upper wick — Represents the highest price point during the trading session.')}
            {styles.bullet('Lower Wick — represents the lowest price point during the trading session.')}
           
            </ScrollView>
        </SafeAreaView>
    )
}

export default Introduction;