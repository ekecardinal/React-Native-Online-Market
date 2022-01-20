import React, {useState} from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';


const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/image.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/image1.jpg')
        }
]

function MessagesScreeen(props) {
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
            <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('Message Selected', item)}
                renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)} />}
                />
            }
            ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreeen;