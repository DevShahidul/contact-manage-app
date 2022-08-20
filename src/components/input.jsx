import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ type, name, placeholder, onChange, value, error }) => {
   return (
      <div className='input_item'>
         <label htmlFor={name}>{name}</label>
         <input className="input_field" type={type} name={name} onChange={onChange} placeholder={placeholder} value={value} />
         {error && (<p className='error'>{error}</p>) }
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