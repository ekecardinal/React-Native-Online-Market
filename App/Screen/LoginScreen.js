import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo}
             source={require('../assets/logo.png')}/>
        <AppForm 
        initialValues={{email:'', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
            <AppFormField 
                    icon='email'
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    name='email'
                    textContentType='emailAddress'
                    />                
                    <AppFormField 
                    icon='lock'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    name='password'                
                    secureTextEntry={true}
                    textContentType='password'
                    />
                
                <SubmitButton title='Login' />            
        </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
   logo: {
       width: 120,
       height: 120,
       alignSelf: 'center',
       marginTop: 50,
       marginBottom: 20,
   } 
})

export default LoginScreen;