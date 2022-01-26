import React, {useState} from 'react';
import { StyleSheet, Text, Platform, StatusBar, Image, SafeAreaView, Picker } from 'react-native';
import AppPicker from './App/components/AppPicker';
import AppTextInput from './App/components/AppTextInput';
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

  const categories = [
    {label: 'house', value: 1},
    {label: 'clothes', value: 2},
    {label: 'foods', value: 3},
  ];
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker selectedItem={category}
      onSelectItem={item => setCategory(item)}
       items={categories} icon='apps' placeholder='Category'/>
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
}

