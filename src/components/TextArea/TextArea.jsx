import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

export const TextArea = ({
  name,
  placeholder,
  error,
  label,
  required,
  touched,
  onChange = undefined,
  disabled = false,
  flex1 = false,
  ...props
}) => {
  return (
    <div className={`font-league ${flex1 ? 'flex-1' : 'w-lg'}`}>
      <div className="mb-4 d-flex flex-space-b bold font-20">
        <label htmlFor={name} className="d-ib">
          {label || name}
          {required && <span className="font-red">{" *"}</span>}
        </label>
        <ErrorMessage
          name={name}
          render={(e) => <span className="text-error medium font-16">{e}</span>}
        />
      </div>
      <Field
        name={name}>
        {({ field, form }) => (
          <textarea
            value={form.values[name]}
            name={name}
            onChange={onChange ? onChange : field.onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`font-league pd-h-16 pd-v-12 d-block font-16 bg-gray medium placeholder ${
              form.errors[name] && form.touched[name] ? "border-error text-error placeholder-error" : ""
            } ${props.className}`}
            style={{ width: '100%', height: '100px', resize: 'none', borderRadius: '20px' }} // Added height and resize for textarea
          />
        )}
      </Field>
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
  props: PropTypes.any,
};

export default TextArea;