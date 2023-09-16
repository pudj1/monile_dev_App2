import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput
} from "react-native";

export default function App() {
    const [text, setText] = React.useState();
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text>123</Text>
                <Text>123</Text>
                <Text>123</Text>
            </View>
            <View style={styles.container}>
                <Text>123</Text>
                <Text>123</Text>
                <Text>123</Text>
            </View>
            <View style={styles.container}>
                <Text>123</Text>
                <Text>123</Text>
                <Text>123</Text>
            </View>
            <View style={styles.container}>
                <Text>123</Text>
                <Text>123</Text>
                <Text>123</Text>
            </View>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "enter text"
                       placeholderTextColor = "#9a73ef"
                       onChangeText = {setText}/>
            <Text style={styles.text}> text:{text}</Text>
            <View style={styles.container}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height:300,
        margin:30
    },
    text: {
        fontSize: 32,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
});
