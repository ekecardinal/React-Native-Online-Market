import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Cards'
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'House For Rent',
        price: 2000,
        image: require('../assets/1.jpg'),
    },
    {
        id: 2,
        title: 'House For Sale',
        price: 4500,
        image: require('../assets/1.jpg'),
    }
]

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) => 
                <Card 
                    title={item.title}
                    subTitle={'N' + item.price}
                    image={item.image} /> 
                } 
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingScreen;