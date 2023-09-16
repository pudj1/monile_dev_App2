import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
    const [counter, setCounter] = React.useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCounter((prevCount) => prevCount + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCounter((prevCount) => prevCount - 1)}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Counter: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
        width: 100,
        height: 50,
        margin: 10,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 30,
    },
    text: {
        fontSize: 32,
    },
});