import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Films</Text>
      <Text>Popular</Text>
      {/** Liste film populaire*/}
      <Text>Top rated</Text>
      {/** Liste film mieux notés*/}
      <Text>Must watch</Text>
      {/** Liste film a regarder*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
