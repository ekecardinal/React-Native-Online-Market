import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/1.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>For Sale</AppText>
                <AppText style={styles.price}>N10000</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/image.jpg")}
                        title='Prince'
                        subTitle='3 Listings'
                    />    
                </View> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    price: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;