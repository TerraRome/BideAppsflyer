import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import appsFlyer from 'react-native-appsflyer';

const Test1 = ({navigation}) => {
  useEffect(() => {
    logEvent('Ini Screen Test1');
  }, []);

  const logEvent = (eventName) => {
    const eventValues = {id: '1'};
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
    alert('ini alert 1');
    logEvent('Ini Tombol alert 1');
  };

  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <TouchableHighlight onPress={() => tombolAlert()}>
        <Text>Alert 1</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigate('Ini Tombol Next', 'Test2')}>
        <Text>Next To Test 2</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Test1;
