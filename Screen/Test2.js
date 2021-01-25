import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import appsFlyer from 'react-native-appsflyer';

const eventName = 'Test 2';
const eventValues = {
  af_content_id: 'BideSolution',
  af_currency: 'USDS',
  af_revenue: '30',
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

export default function Test2({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight onPress={()=>alert('ini alert 2')}>
                <Text>Alert 2</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>navigation.navigate('Test1')}>
                <Text>Back To Test 1</Text>
            </TouchableHighlight>
        </View>
    )
}
