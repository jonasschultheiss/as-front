import { ErrorMessage, FieldArray } from 'formik';
import Button from '../button';
import FieldSet from '../fieldSet';

export default function PointsFieldArray({ product, isEditing, productIndex }) {
  return (
    <FieldArray
      name="points"
      render={(arrayHelpers) => (
        <div className="border-2 border-gray-300 p-2 my-2 rounded">
          <h4 className="font-medium text-lg">Points</h4>
          {product && product.points.length > 0
            ? product.points.map((point, index) => (
                <div className="border-2 border-gray-300 p-2 my-2 rounded" key={index} role={`points.${index}.status`}>
                  <FieldSet
                    id={`product.${productIndex}.points.${index}.available`}
                    name={`product.${productIndex}.points.${index}.status`}
                    label="Available"
                    disabled={isEditing}
                    type="radio"
                    value={`available`}
                  />
                  <FieldSet
                    id={`product.${productIndex}.points.${index}.not_available`}
                    name={`product.${productIndex}.points.${index}.status`}
                    label="Not available"
                    disabled={isEditing}
                    type="radio"
                    value={`not_available`}
                  />
                  <ErrorMessage name={`points.${index}.status`} />
                  {!isEditing && <Button onClick={() => arrayHelpers.remove(index)} text="Remove this point" />}
                </div>
              ))
            : null}
          {!isEditing ? (
            <Button primary text="Add new point" onClick={() => arrayHelpers.push({ status: 'available' })} />
          ) : null}
        </div>
      )}
    />
  );
}
