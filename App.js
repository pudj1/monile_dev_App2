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
const [data, setData] = React.useState([{key: "прокинутися"}]);
    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    return (
      <View style={styles.container}>
          <Text>Введіть дію для розпорядку дня</Text>
        <TextInput />
          <FlatList
              data={data}
              renderItem={({item}) =>
                  <View style={styles.note}>
                      <Text style={styles.item}>
                      </Text>
                      <Button title={"X"}/>
                  </View>
              }
              ItemSeparatorComponent={renderSeparator}
          />

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

  },
    note:{
    },
  text: {
    color: 'red',
    fontSize: 32,
  },
});
