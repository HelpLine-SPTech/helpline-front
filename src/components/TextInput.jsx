import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Field } from 'formik'

export const TextInput = ({ name, placeholder, error, type, label, required, touched, ...props}) => {
  return (
    <div className='w-lg font-league'>
      <div className='mb-4 w-lg d-flex flex-space-b bold font-20'>
        <label htmlFor={name} className='d-ib'>
          {label || name}
          {required && <span className='font-red'>{' *'}</span>}
        </label>
        <ErrorMessage name={name} render={e => <span className='text-error medium font-16'>{e}</span>}/>
      </div>
      <Field name={name} type={type} placeholder={placeholder} {...props} className={`font-league pd-h-16 pd-v-12 d-block font-16 round bg-gray medium placeholder ${error && touched ? 'border-error text-error placeholder-error' : ''} ${props.className}`}/>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  props: PropTypes.any,
}

export default TextInput;