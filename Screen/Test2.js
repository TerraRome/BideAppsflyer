import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default function Test2({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight onPress={()=>alert('ini alert 2')}>
                <Text>Alert</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>navigation.navigate('Test1')}>
                <Text>Back</Text>
            </TouchableHighlight>
        </View>
    )
}
