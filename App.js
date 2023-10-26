import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    Dimensions,
    ScrollView,
    SafeAreaView,
    ImageBackground,
} from 'react-native';

const App = () => {
 return (
     <View>

     </View>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
    },
    container2: {
        flex: 1,
        fontSize: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        backgroundColor: 'white', 
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5,
    },
    infoText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    normalDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginHorizontal: 8,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;