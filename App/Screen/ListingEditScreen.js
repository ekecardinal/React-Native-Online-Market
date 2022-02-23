import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
 
// import {
//     AppForm,
//     AppFormField,
//     AppFormPicker,
//     SubmitButton
// } from '../components/forms';
import  AppForm  from '../components/forms/AppForm';
import  AppFormField  from '../components/forms/AppFormField';
import  AppFormPicker  from '../components/forms/AppFormPicker';
import FormImagePicker from '../components/forms/FormImagePicker';
import  SubmitButton  from '../components/forms/SubmitButton';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one Image')
})

const categories = [
    {label: 'House', value: 1, backgroundColor: '#FF7F50', icon: 'home-city-outline'},
    {label: 'Sports', value: 4, backgroundColor: '#FA8072', icon: 'football'},
    {label: 'Accessories', value: 3, backgroundColor: 'orange', icon: 'camera'},
    {label: 'Cloth', value: 2, backgroundColor: '#D2691E', icon: 'hanger'},
    {label: 'Cars', value: 5, backgroundColor: '#008080', icon: 'car'},
    {label: 'Games', value: 6, backgroundColor: '#40E0D0', icon: 'gamepad'},
    {label: 'Books', value: 7, backgroundColor: '#87CEFA', icon: 'book-open-page-variant'},
    {label: 'Computer', value: 8, backgroundColor: '#4169E1', icon: 'laptop'},
    {label: 'Others', value: 9, backgroundColor: '#8A2BE2', icon: 'help'},
]

function ListingEditScreen(props) {

    const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
            initialValues={{
                price: '',
                title: '',
                description: '',
                category: null,
                images: []
            }}
            onSubmit={(values => console.log(location))}
            validationSchema={validationSchema}>
                <FormImagePicker name='images' />
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField 
                keyboardType='numeric'
                maxLength={8}
                name='price'
                placeholder='Price'
                width={120}/>
                
                <AppFormPicker 
                name='category'
                numberOfColumns={3}
                placeholder='Category'
                PickerItemComponent={CategoryPickerItem}
                items={categories}
                width='50%'/>

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