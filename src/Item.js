import {Button, Text, View} from "react-native";

export const Item = (props) =>{
    const {name, description, price} = {...props};
    return(
        <View>
            <View>
                <Text>
                    {name}
                </Text>
            </View>
            <View>
                <Text>
                    {description}
                </Text>
            </View>
            <View>
                <Text>
                    {price}
                </Text>
            </View>
            <Button title={"Buy"}></Button>
        </View>
    )
}
