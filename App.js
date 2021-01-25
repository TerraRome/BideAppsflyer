
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test1 from './Screen/Test1';
import Test2 from './Screen/Test2';

const Stack = createStackNavigator();

import appsFlyer from 'react-native-appsflyer';

appsFlyer.initSdk(
  {
    devKey: 'K2***********99',
    isDebug: false,
    onInstallConversionDataListener: false, //Optional
    onDeepLinkListener: true, //Optional
  },
  (res) => {
    console.log(res);
  },
  (err) => {
    console.error(err);
  }
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test1" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Test1" component={Test1} />
        <Stack.Screen name="Test2" component={Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;