import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Platform, StatusBar, Image, SafeAreaView, Picker, Button } from 'react-native';
import AppPicker from './App/components/AppPicker';
import AppTextInput from './App/components/AppTextInput';
import Icon from './App/components/Icon';
import ImageInput from './App/components/ImageInput';
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
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import AppButton from './App/components/AppButton';
import ImageInputList from './App/components/ImageInputList';

export default function App() {
  //const [imageUris, setImageUris] = useState([]);

    return (
    <ListingEditScreen />
  );
}

