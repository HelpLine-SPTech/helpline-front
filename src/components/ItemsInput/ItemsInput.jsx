import React, { useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

export const ItemsInput = ({
  name,
  placeholder,
  error,
  label,
  required,
  touched,
  disabled = false,
  flex1 = false,

  items,
  handleAddItem,
  handleRemoveItem,
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
      <Field name={name}>
        {({ field, form }) => (
          <>
            <div className="d-flex">
              <input
                value={form.values[name]}
                name={name}
                onChange={field.onChange}
                disabled={disabled}
                placeholder={placeholder}
                className={`font-league pd-h-16 pd-v-12 d-block font-16 round bg-gray medium placeholder ${
                  form.errors[name] && form.touched[name] ? "border-error text-error placeholder-error" : ""
                } ${props.className}`}
                style={{ width: '100%' }}
              />
              <button
                type="button"
                onClick={() => handleAddItem(form.values[name], form.setFieldValue)}
                disabled={disabled}
                className="ml-2 round cursor-pointer"
                style={{backgroundColor: '#DD7631', width: '45px'}}
              >
                <i className="bi bi-plus icon-xg icon-white"></i>
              </button>
            </div>
            <ul className="mt-2" style={{ maxHeight: '300px',}}>
              {items.map((item, index) => (
                <li key={index} className="d-flex mt-2">
                  <span style={{flex: 1}}>{item}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="round cursor-pointer"
                    style={{ backgroundColor: 'red', width: '22.5px' }}
                  >
                    <i className="bi bi-x icon-g icon-white"></i>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </Field>
    </div> 
  );
};

ItemsInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
  flex1: PropTypes.bool,
  props: PropTypes.any,
};

export default ItemsInput;
