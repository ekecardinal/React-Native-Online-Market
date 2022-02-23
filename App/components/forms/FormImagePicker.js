import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name, }) {

    const { touched, setFieldValues, errors, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValues(name, [...imageUris, uri])
      }
      const handleRemove = uri => {
        setFieldValues(name, imageUris.filter((imageUri) => imageUri !== uri))
      }

  return (
      <>
    <ImageInputList imageUris={ imageUris }
    onAddImage={handleAdd}
    onRemoveImage={handleRemove}/>
    <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

export default FormImagePicker;