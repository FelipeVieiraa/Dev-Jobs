import React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

export default function WebGit() {
  const { params } = useRoute();

 return (
  <WebView 
    source={{uri: params.github}}
  />
  );
}