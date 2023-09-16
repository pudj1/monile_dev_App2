import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    Alert,
    TouchableHighlight,
    View,
    TextInput,
    Button, FlatList
} from "react-native";

export default function App() {
    const [data, setData] = React.useState([{key: "прокинутися"},{key: "прокинутися2"}]);
    const [text, setText] = React.useState("");
    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                    marginTop:3,
                    marginBottom:3,
                }}
            />
        );
    };
    const AddTask = () =>{
        if(text && text.length !== 0)
            setData((prevData) => [...prevData,{key:text}])
    }
    const HandleDelete = (key) => {
        setData((prevData) => {
            for(let i = 0; i< prevData.length; i++){
                if(prevData[i].key === key){
                    return prevData.slice(0, i).concat(prevData.slice(i+1,prevData.length))
                }
            }
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Введіть дію для розпорядку дня</Text>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "enter text"
                       placeholderTextColor = "#9a73ef"
                       onChangeText = {setText}/>
            <Button onPress={AddTask} title={"Додати"}/>
            <FlatList
                data={data}
                renderItem={({item}) =>
                    <View style={styles.note}>
                        <Text style={{fontSize: 22}}>
                            {item.key}
                        </Text>
                        <TouchableHighlight onPress={() => console.log("Pressed")} activeOpacity={0.6}  underlayColor="#DDDDDD">
                            <Text onPress={() => HandleDelete(item.key)} style={styles.delete}>X</Text>
                        </TouchableHighlight>
                    </View>
                }
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        flex: 1,
        backgroundColor: '#fff',

    },
    note:{
        display:"flex",
        flexDirection:"row",
        justifyContent: 'space-around',
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    text: {
        fontSize: 30,
    },
    delete: {
        borderColor:"red",
        borderWidth:1,
        width:40,
        textAlign:"center",
        backgroundColor:"red",
        fontSize: 22,
        color:"black"
    },
});
