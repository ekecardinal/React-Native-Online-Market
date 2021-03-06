import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Cards({ title, subTitle, image, request, price}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={(image)} />            
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
            <View>
                <AppText>{request}</AppText>
                <AppText>{price}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        height: 200,
        width: '100%',
    },
    subTitle: {
        color: colors.open
    },
    title: {
        marginBottom: 7,
    }
})

export default Cards;