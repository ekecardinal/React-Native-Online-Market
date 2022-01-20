import React from 'react';
import { Image, StyleSheet, View, Text, } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                {/* <Text style={styles.tagline}>Your No. 1 Real Estate Company</Text> */}
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title='Register' color='open' />
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },    
    logo: {
        width: 220,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },    
    tagline: {
        color:'#fff',
        fontWeight: '600',
        fontSize: 22,
        marginVertical: 20,
    }
})

export default WelcomeScreen;