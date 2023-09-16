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
    Button, FlatList, TouchableOpacity, ScrollView
} from "react-native";

export default function App() {
    const [rgb, setRgb] = React.useState({"red":255, "green":0, "blue":0});
    const [boxWidth, setBoxWidth] = React.useState(100);
    const [boxHeight, setBoxHeight] = React.useState(100);

    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            flex: 1,
            backgroundColor: '#fff',
            alignItems: "center",
            justifyContent: 'center',
        },
        input: {
            margin: 15,
            padding:6,
            height: 40,
            minWidth:30,
            maxWidth:200,
            width:boxWidth,
            borderColor: '#7a42f4',
            borderWidth: 1
        },
        text: {
            fontSize: 30,
        },
        box:{
            height: boxHeight,
            width:boxWidth,
            minHeight:10,
            maxHeight:300,
            minWidth:10,
            maxWidth:300,
            backgroundColor: `rgb(${rgb.red},${rgb.green},${rgb.blue})`,
        },buttonsContainer: {
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
        },table: {
            flexDirection: 'column',
        },
        row: {
            flexDirection: 'row',
        },
        cell: {
            flex: 1,
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
        },
    });
    console.log(rgb)
    const HandleChangeRed = (text)=>{
        let value = parseInt(text)
        if(value.toString() === "NaN"){
            setRgb((prevRgb)=> {
                return {...prevRgb, "red": 0}
            })
        } else if(value > 255){
            setRgb((prevRgb)=> {
                return {...prevRgb, "red": 255}
            })
        } else if(value < 0){
            setRgb((prevRgb)=> {
                return {...prevRgb, "red": 0}
            })
        }else
            setRgb((prevRgb)=> {
                return {...prevRgb, "red":value}
            })
    }
    const HandleChangeGreen = (text)=>{
        let value = parseInt(text)
        if(value.toString() === "NaN"){
            setRgb((prevRgb)=> {
                return {...prevRgb, "green": 0}
            })
        } else if(value > 255){
            setRgb((prevRgb)=> {
                return {...prevRgb, "green": 255}
            })
        } else if(value < 0){
            setRgb((prevRgb)=> {
                return {...prevRgb, "green": 0}
            })
        }else
            setRgb((prevRgb)=> {
                return {...prevRgb, "green":value}
            })
    }
    const HandleChangeBlue = (text)=>{

        let value = parseInt(text)
        if(value.toString() == "NaN"){
            setRgb((prevRgb)=> {
                return {...prevRgb, "blue": 0}
            })
        } else if(value > 255){
            setRgb((prevRgb)=> {
                return {...prevRgb, "blue": 255}
            })
        } else if(value < 0){
            setRgb((prevRgb)=> {
                return {...prevRgb, "blue": 0}
            })
        }else
            setRgb((prevRgb)=> {
                return {...prevRgb, "blue":value}
            })
    }

    const HandleIncreaseWight = () => {
        if(boxWidth<300)
            setBoxWidth((prevWidth) =>{
                return prevWidth + 10
            })
    }
    const HandleDecreaseWight = () => {
        if(boxWidth>10)
            setBoxWidth((prevWidth) =>{
                return prevWidth - 10
            })
    }
    const HandleIncreaseHeight = () => {
        if(boxHeight<300)
        setBoxHeight((prevHeight) =>{
            return prevHeight + 10
        })
    }
    const HandleDecreaseHeight = () => {
        if(boxHeight>10)
        setBoxHeight((prevHeight) =>{
            return prevHeight - 10
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Red:</Text>
                <TextInput
                  style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Red"
                  value={rgb.red?.toString()}
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {HandleChangeRed}/>
                <Text>Green:</Text>
                <TextInput
                    style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Green"
                    value={rgb.green?.toString()}
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {HandleChangeGreen}/>
                <Text>Blue:</Text>
                <TextInput
                    style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Blue"
                    value={rgb.blue?.toString()}
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {HandleChangeBlue}/>
                <View style={styles.box}></View>
                <Text>Width:</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={HandleIncreaseWight}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={HandleDecreaseWight}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text>Height:</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={HandleIncreaseHeight}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={HandleDecreaseHeight}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text>3</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text>4</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text>5</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text>6</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text>7</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text>8</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text>9</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}


