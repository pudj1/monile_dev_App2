import * as React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Animated,
    ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{margin:10}}>
            <Button
                title="Go to Contact Book"
                onPress={() => navigation.navigate('Contact Book')}
            />
            </View>
            <View style={{margin:10}}>
            <Button
                title="Go to Gallery"
                onPress={() => navigation.navigate('Gallery')}
            />
            </View>
            <View style={{margin:10}}>
            <Button
                title="Go to Something"
                onPress={() => navigation.navigate('smth')}
            />
            </View>
        </View>
    );
}


function ContactBook({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contact Book Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
function Gallery({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const images = [
        "https://png.pngtree.com/png-clipart/20230514/original/pngtree-smile-dog-on-white-background-png-image_9160783.png",
        "https://png.pngtree.com/png-clipart/20231003/original/pngtree-cute-husky-dog-animal-png-image_13076108.png",
        "https://png.pngtree.com/png-clipart/20230417/original/pngtree-cute-white-dog-png-image_9058856.png",
        "https://png.pngtree.com/png-clipart/20230411/original/pngtree-dog-corgi-animal-cute-white-background-transparent-png-image_9044376.png",
        "https://png.pngtree.com/png-clipart/20231003/original/pngtree-puppy-labrador-retriever-cute-dog-animal-png-image_13075558.png"
    ]
    const scrollX = new Animated.Value(0);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
function Something({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Something Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Contact Book" component={ContactBook} />
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="smth" component={Something} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
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
