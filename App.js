import React from 'react';
import { StyleSheet, Text, Platform, StatusBar, Image, SafeAreaView } from 'react-native';
import Icon from './App/components/Icon';
import ListItem from './App/components/ListItem';
import Screen from './App/components/Screen';
import AccountScreen from './App/Screen/AccountScreen';
import ListingDetailsScreen from './App/Screen/ListingDetailsScreen';
import ListingScreen from './App/Screen/ListingScreen';
import MessagesScreeen from './App/Screen/MessagesScreeen';
import ViewImageScreen from './App/Screen/ViewImageScreen';
import WelcomeScreen from './App/Screen/WelcomeScreen';

export default function App() {
  return (
    <ListingScreen />
  );
}

