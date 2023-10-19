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
    const windowWidth = Dimensions.get('window').width;
    const images = [
        "https://png.pngtree.com/png-clipart/20230514/original/pngtree-smile-dog-on-white-background-png-image_9160783.png",
        "https://png.pngtree.com/png-clipart/20231003/original/pngtree-cute-husky-dog-animal-png-image_13076108.png",
        "https://png.pngtree.com/png-clipart/20230417/original/pngtree-cute-white-dog-png-image_9058856.png",
        "https://png.pngtree.com/png-clipart/20230411/original/pngtree-dog-corgi-animal-cute-white-background-transparent-png-image_9044376.png",
        "https://png.pngtree.com/png-clipart/20231003/original/pngtree-puppy-labrador-retriever-cute-dog-animal-png-image_13075558.png"
    ]
    const animatedValue = new Animated.Value(0);
    const fontsize = 30;
    const scrollX = new Animated.Value(0);

    useEffect(() => {
        animate();
    }, []);

    const animate = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => animate());
    };

    const fromTopToMid = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [Dimensions.get('window').height / 2, 0],
    });

    const fromBottomToMid = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-Dimensions.get('window').height / 2, 0],
    });

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Animated.Text
                    style={{
                        top: fromTopToMid,
                        marginTop: 10,
                        fontSize: fontsize,
                        marginLeft: 5,
                        color: 'green',
                    }}
                >
                    H
                </Animated.Text>
                <Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        fontSize: fontsize,
                        marginLeft: 5,
                        color: 'green',
                    }}
                >
                    E
                </Animated.Text>
                <Animated.Text
                    style={{
                        top: fromTopToMid,
                        marginTop: 10,
                        fontSize: fontsize,
                        marginLeft: 5,
                        color: 'green',
                    }}
                >
                    L
                </Animated.Text>
                <Animated.Text
                    style={{
                        top: fromBottomToMid,
                        marginTop: 10,
                        fontSize: fontsize,
                        marginLeft: 5,
                        color: 'green',
                    }}
                >
                    L
                </Animated.Text>
                <Animated.Text
                    style={{
                        top: fromTopToMid,
                        marginTop: 10,
                        fontSize: fontsize,
                        marginLeft: 5,
                        color: 'green',
                    }}
                >
                    O
                </Animated.Text>
                <Animated.Text
                    style={{
                        top: fromTopToMid,
                        fontSize: fontsize,
                        marginTop: 10,
                        marginLeft: 5,
                        color: 'green',
                    }}
                >
                    !
                </Animated.Text>
            </View>
            <SafeAreaView style={styles.container3}>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal={true}
                        style={styles.scrollViewStyle}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        scrollEventThrottle={1}
                    >
                        {images.map((image, imageIndex) => {
                            return (
                                <View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
                                    <ImageBackground source={{ uri: image }} style={styles.card}>

                                    </ImageBackground>
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                        {images.map((image, imageIndex) => {
                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (imageIndex - 1),
                                    windowWidth * imageIndex,
                                    windowWidth * (imageIndex + 1),
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });
                            return <Animated.View key={imageIndex} style={[styles.normalDot, { width }]} />;
                        })}
                    </View>
                </View>
            </SafeAreaView>
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
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
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
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;