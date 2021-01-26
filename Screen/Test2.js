import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import appsFlyer from 'react-native-appsflyer';

export default function Test2({navigation}) {
  useEffect(() => {
    logEvent('Ini Screen Test2');
  }, []);

  const logEvent = (eventName) => {
    const eventValues = {id: '2'};
    appsFlyer.logEvent(
      eventName,
      eventValues,
      (result) => {
        console.log('logEvent: ' + eventName + ' ' + result);
      },
      (error) => {
        console.error('logEvent: ' + error);
      },
    );
  };

  const navigate = (eventName, screenNav) => {
    navigation.navigate(screenNav);
    logEvent(eventName);
  };

  const tombolAlert = () => {
    alert('ini alert 2');
    logEvent('Ini Tombol alert 2');
  };
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <TouchableHighlight onPress={() => tombolAlert()}>
        <Text>Alert 2</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigate('Ini Tombol Back', 'Test1')}>
        <Text>Back To Test 1</Text>
      </TouchableHighlight>
    </View>
  );
}
