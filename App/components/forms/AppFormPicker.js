import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import { ErrorMessage } from '../forms';

function AppFormPicker({ items, name, placeholder }) {

    const { touched, setFieldValues, errors, values } = useFormikContext();
    return (
        <>
            <AppPicker items={items}
            onSelectItems={(item) => setFieldValues(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
            />
            <ErrorMessage error={errors.name} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;