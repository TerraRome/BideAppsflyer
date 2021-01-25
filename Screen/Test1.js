import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import appsFlyer from 'react-native-appsflyer';

const eventName = 'Test 1';
const eventValues = {
  af_content_id: 'BideQueue',
  af_currency: 'IDRS',
  af_revenue: '100',
};

appsFlyer.logEvent(
  eventName,
  eventValues,
  (res) => {
    alert(res);
  },
  (err) => {
    alert(err);
  }
);

export default function Test1({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight onPress={()=>alert('ini alert')}>
                <Text>Alert 1</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>navigation.navigate('Test2')}>
                <Text>Next To Test 2</Text>
            </TouchableHighlight>
        </View>
    )
}
