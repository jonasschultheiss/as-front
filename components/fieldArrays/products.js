import { ErrorMessage, FieldArray } from 'formik';
import Button from '../button';
import FieldSet from '../fieldSet';
import PointsFieldArray from './points';

export default function ProductsFieldArray({ values, isEditing }) {
  return (
    <FieldArray
      name="products"
      render={(arrayHelpers) => (
        <div className="border-2 border-gray-300 p-2 my-2 rounded">
          <h4 className="font-medium text-lg">Products</h4>
          {values && values.products && values.products.length > 0
            ? values.products.map((product, index) => (
                <div className="border-2 border-gray-300 p-2 my-2 rounded" key={index}>
                  <FieldSet
                    id={`products.${index}.product_id`}
                    name={`products.${index}.product_id`}
                    disabled={isEditing}
                    label="Product ID"
                    type="text"
                  />
                  <ErrorMessage name={`products.${index}.product_id`} />
                  {!isEditing && <Button onClick={() => arrayHelpers.remove(index)} text="Remove this product" />}
                  <PointsFieldArray product={product} isEditing={isEditing} productIndex={index} />
                </div>
              ))
            : null}
          {!isEditing ? <Button primary text="Add new product" onClick={() => arrayHelpers.push('')} /> : null}
        </div>
      )}
    />
  );
}
