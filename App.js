import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogin from './screens/SignUpLoginScreen';

export default function App() {
  return (
    <SignUpLogin/>
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
