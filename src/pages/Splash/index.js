import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARREGANDO...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#416FD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Anton_400Regular',
    fontSize: 28,
  },
  logo: {
    width: 150,
    height: 150
  }
});