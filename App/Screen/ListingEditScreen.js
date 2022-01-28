import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
})

const categories = [
    {label: 'House', value: 1},
    {label: 'Cloth', value: 2},
    {label: 'Accessories', value: 3},
    {label: 'Cars', value: 4},
]

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
            initialValues={{
                price: '',
                title: '',
                description: '',
                category: null,
            }}
            onSubmit={(values => console.log(values))}
            validationSchema={validationSchema}>
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField 
                keyboardType='numeric'
                maxLength={8}
                name='price'
                placeholder='Price'/>
                
                <AppFormPicker name='category'
                placeholder='Category'
                items={categories}/>

                <AppFormField 
                name='description'
                maxLength={255}
                multiLine
                numberOfLines={3}
                placeholder='Description'/>
                <SubmitButton title='Post'/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default ListingEditScreen;