import { ErrorMessage, Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import Button from './button';
import PricesFieldArray from './fieldArrays/prices';
import ProductsFieldArray from './fieldArrays/products';
import FieldSet from './fieldSet';

export default function StationForm({ stationId, initialData, onSubmit }) {
  const router = useRouter();
  const isEditing = router.pathname === '/stations/[stationId]';

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values }) => (
        <Form>
          <FieldSet id="name" name="name" label="Name" type="text" />
          <ErrorMessage name="name" />
          <FieldSet id="address" name="address" label="Address" type="text" disabled={isEditing} />
          <ErrorMessage name="address" />
          <FieldSet id="city" name="city" label="City" type="text" disabled={isEditing} />
          <ErrorMessage name="city" />
          <FieldSet id="latitude" name="latitude" label="Latitude" type="number" disabled={isEditing} />
          <ErrorMessage name="latitude" />
          <FieldSet id="longitude" name="longitude" label="Longitude" type="number" disabled={isEditing} />
          <ErrorMessage name="longitude" />
          <PricesFieldArray values={values} isEditing={isEditing} />
          <ProductsFieldArray values={values} isEditing={isEditing} />
          <Button primary type="submit" text="Save changes" />
        </Form>
      )}
    </Formik>
  );
}
