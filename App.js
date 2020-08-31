import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './src/routes';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#416FD9" translucent={false}/>
      <Routes/>
    </>
  );
}