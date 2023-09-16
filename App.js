import React from "react";
import {StyleSheet, Text, SafeAreaView, StatusBar, Alert, TouchableHighlight, View, ScrollView} from "react-native";

export default function App() {
    return(
    <ScrollView>
        <Text>123</Text>
    </ScrollView>
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
