import React, { Component } from 'react';
import {StyleSheet, AppRegistry,Text, View,Animated,Easing} from 'react-native';

export default class App extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate()
    } //метод animate викликається з componentDidMount
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start(() => this.animate())
    }

    render() {
        const fromTopToMid = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [300, 0]
        })
        const fromBottomToMid = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0]
        })



        return (
            <View style={styles.container}>
                <Animated.Text // returns Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        color: 'green'}} >
                    H
                </Animated.Text>
                <Animated.Text // returns Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        color: 'green'}} >
                    E
                </Animated.Text>
                <Animated.Text // returns Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        color: 'green'}} >
                    L
                </Animated.Text>
                <Animated.Text // returns Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        color: 'green'}} >
                    L
                </Animated.Text>
                <Animated.Text // returns Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        color: 'green'}} >
                    O
                </Animated.Text>
                <Animated.Text // returns Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        color: 'green'}} >
                    !
                </Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:"flex",
        flexDirection:"row",
        verticalAlign:"center",
        alignItems:"center"
    }
})
