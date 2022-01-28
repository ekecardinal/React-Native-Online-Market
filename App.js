import React, {useState} from 'react';
import { StyleSheet, Text, Platform, StatusBar, Image, SafeAreaView, Picker } from 'react-native';
import AppPicker from './App/components/AppPicker';
import AppTextInput from './App/components/AppTextInput';
import Icon from './App/components/Icon';
import ListItem from './App/components/ListItem';
import Screen from './App/components/Screen';
import AccountScreen from './App/Screen/AccountScreen';
import ListingDetailsScreen from './App/Screen/ListingDetailsScreen';
import ListingEditScreen from './App/Screen/ListingEditScreen';
import ListingScreen from './App/Screen/ListingScreen';
import LoginScreen from './App/Screen/LoginScreen';
import MessagesScreeen from './App/Screen/MessagesScreeen';
import ViewImageScreen from './App/Screen/ViewImageScreen';
import WelcomeScreen from './App/Screen/WelcomeScreen';

export default function App() {


  
  //const [category, setCategory] = useState(categories[0]);

  return (
    <ListingEditScreen />
  );
}

