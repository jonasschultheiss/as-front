import { Field } from 'formik';

export default function FieldSet({ id, name, placeholder, label, type, disabled, value, ...rest }) {
  return (
    <div className="flex flex-col mb-2">
      <label className=" py-1" htmlFor={id}>
        {label}
      </label>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        className="bg-gray-300 rounded p-2"
        disabled={disabled}
        type={type}
        {...rest}
      />
    </div>
  );
}
