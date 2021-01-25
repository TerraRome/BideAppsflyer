import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default function Test1({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight onPress={()=>alert('ini alert')}>
                <Text>Alert</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>navigation.navigate('Test2')}>
                <Text>Next</Text>
            </TouchableHighlight>
        </View>
    )
}
