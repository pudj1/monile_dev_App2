import React from 'react'
import {Alert, ScrollView, Text, View} from "react-native";
import {Item} from "./src/Item"

export const App = () =>{

    const [flatListItems ,setFlatListItems] = React.useState([])
    const [items, setItems] = React.useState([
        {id:"1",name:"123",description:"smtg", price:"22.00"},
        {id:"2",name:"31",description:"smtg", price:"2.00"},
        {id:"3",name:"12",description:"smtg", price:"12.00"},
        {id:"4",name:"1",description:"smtg", price:"552.00"},
        {id:"5",name:"1246",description:"smtg", price:"662.00"},
        {id:"6",name:"144",description:"smtg", price:"72.00"},
        {id:"7",name:"123",description:"smtg", price:"22.00"},
        {id:"8",name:"31",description:"smtg", price:"2.00"},
        {id:"9",name:"12",description:"smtg", price:"12.00"},
        {id:"10",name:"1",description:"smtg", price:"552.00"},
        {id:"11",name:"1246",description:"smtg", price:"662.00"},
        {id:"12",name:"144",description:"smtg", price:"72.00"},
    ])

    return (

        <View>
            <View className={"main-menu"}>
                <Text>
                    menu
                </Text>
            </View>
            <ScrollView>
                <View className={"main-items"}>

                    {items.map(
                        (item, pos)=> <Item key={pos} key2={pos}/>
                    )}

                </View>
                <View className={"main-footer"}>
                    <Text>
                        footer
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}