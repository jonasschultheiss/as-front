import { ErrorMessage, FieldArray } from 'formik';
import Button from '../button';
import FieldSet from '../fieldSet';

export default function PricesFieldArray({ values, isEditing }) {
  return (
    <FieldArray
      name="prices"
      render={(arrayHelpers) => (
        <div className="border-2 border-gray-300 p-2 my-2 rounded">
          <h4 className="font-medium text-lg">Prices</h4>
          {values && values.prices && values.prices.length > 0
            ? values.prices.map((price, index) => (
                <div className="border-2 border-gray-300 p-2 my-2 rounded" key={index}>
                  <FieldSet id={`prices.${index}.price`} name={`prices.${index}.price`} label="Price" type="number" />
                  <ErrorMessage name={`prices.${index}.price`} />
                  <FieldSet
                    id={`prices.${index}.currency`}
                    name={`prices.${index}.currency`}
                    label="Currency"
                    type="text"
                    disabled={isEditing}
                  />
                  <ErrorMessage name={`prices.${index}.currency`} />
                  <FieldSet
                    id={`prices.${index}.product_id`}
                    name={`prices.${index}.product_id`}
                    label="Product ID"
                    type="text"
                    disabled={isEditing}
                  />
                  <ErrorMessage name={`prices.${index}.product_id`} />
                  {!isEditing && <Button onClick={() => arrayHelpers.remove(index)} text="Remove this price" />}
                </div>
              ))
            : null}
          {!isEditing ? <Button primary text="Add new price" onClick={() => arrayHelpers.push('')} /> : null}
        </div>
      )}
    />
  );
}
