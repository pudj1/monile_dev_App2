import React from "react";
import {StyleSheet, Text, SafeAreaView, StatusBar, Alert, TouchableHighlight, View} from "react-native";

export default function App() {
  const HandlePressWithSimpleAlert = () => Alert.alert("Simple Alert Box");
  const HandlePressWithAdvancedAlert = () => Alert.alert(
      'Advanced alert',
      'My first advanced alert',
      [
        {
          text: 'Cancel',
          onPress: () => HandlePressWithSimpleAlert(),
        },
        {text: 'OK', onPress: () => HandlePressWithSimpleAlert()},
      ],
  );
  return (
      <View>
        <Text onPress={HandlePressWithSimpleAlert} style = {styles.text}>
          text with simple alert
        </Text>

        <TouchableHighlight  activeOpacity={0.6}  underlayColor="#DDDDDD"  onPress={HandlePressWithSimpleAlert}>
            <Text style = {styles.text}>
              text with effect
            </Text>
        </TouchableHighlight >

        <TouchableHighlight  activeOpacity={0.6}  underlayColor="#DDDDDD"  onPress={HandlePressWithAdvancedAlert}>
          <Text style = {styles.text}>
            text with advanced alert
          </Text>
        </TouchableHighlight >
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
    fontSize: 32,
  },
});
