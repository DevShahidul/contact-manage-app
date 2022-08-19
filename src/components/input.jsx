import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, placeholder, onChange, value }) => {
   return (
      <div className='input_item'>
         <label htmlFor={name}>{name}</label>
         <input className="input_field" type={type} name={name} onChange={onChange} placeholder={placeholder} value={value} />
      </div>
   )
}

Input.propTypes = {
   type: PropTypes.string,
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired
}

Input.defaultProps = {
   type: 'text'
}

export default Input