import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Field } from 'formik'

export const TextInput = ({ name, type, label, required, ...props}) => {
  return (
    <div>
      <span>
        {label || name}
        {required && <span>*</span>}
      </span>
      <Field name={name} type={type} {...props} />
      <ErrorMessage name={name}/>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  props: PropTypes.any
}

export default TextInput;