import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.open
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
            title='EKE Cardinal'
            subTitle='ekecardinal@gmail.com'
            image={require('../assets/image.jpg')} />
            </View>
            <View style={styles.container} >
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={ ({ item }) => 
                <ListItem 
                title={item.title}
                IconComponent={
                    <Icon name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor} />
                } /> } />
            </View>
            <ListItem  title='Log Out'
            IconComponent={
            <Icon name='logout' backgroundColor='#ffe66d' />} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})

export default AccountScreen;