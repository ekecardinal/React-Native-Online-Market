import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';



function AppFormField({ name, ...otherProps }) {

    const {setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput 
                onChangeText={handleChange('name')}
                {...otherProps}
                onBlur={() => setFieldTouched('name')}
                />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;