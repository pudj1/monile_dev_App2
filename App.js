import React, { Component } from 'react';
import {StyleSheet, AppRegistry,Text, View,Animated,Easing} from 'react-native';

export default class App extends Component {
    constructor () {
        super()
        this.spinValue = new Animated.Value(0) //оголосити spinValue як новий Animated.Value і передати в ньому 0 (нуль)
    }

    componentDidMount () {
        this.spin()
    }

    //створити метод spin і викликати його з componentDidMount
    spin() {
        this.spinValue.setValue(0) // встановити spinValue рівним 0
        Animated.timing(    // Виклик методу Animated.timing() отримує два аргументи:
            this.spinValue, // значення
            {           // і об'єкт конфігурації
                toValue: 1, // і встановивши spinValue рівним 1
                duration: 4000, // протягом 4000 мілісекунд
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}] }}
                    source={require('./react_logo.png')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
