import * as React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';

import genericStyles from '../styles/genericStyles';

export default function TabOneScreen() {
  return (
    <View>
      <Pressable onPress={()=>{
        console.log('Bla')
      }} >
        <Text>Bla</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
