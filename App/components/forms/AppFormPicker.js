import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage  from './ErrorMessage';

function AppFormPicker({ items, name, numberOfColumns, placeholder, width='100%', PickerItemComponent }) {

    const { touched, setFieldValues, errors, values } = useFormikContext();
    return (
        <>
            <AppPicker items={items}
            numberOfColumns={numberOfColumns}
            onSelectItems={(item) => setFieldValues(name, item)}
            placeholder={placeholder}
            PickerItemComponent={PickerItemComponent}
            selectedItem={values[name]}
            width={width}
            />
            <ErrorMessage error={errors.name} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;