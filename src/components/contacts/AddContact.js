import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Consumer } from '../../context';
import Input from '../input';

const AddContact = () => {
   let navigate = useNavigate();
   const [state, setState] = useState({
      name: '',
      email: '',
      phone: '',
      errors: {}
   })
   const handleOnChange = (e) => {
      setState(prev => {
         return {
            ...prev,
            [e.target.name]: e.target.value,
            errors: {}
         }
      })
   }

   const handleOnsubmit = (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = state;
      if(name === ""){
         setState((prev=> {
            const {errors} = prev;
            return {
               ...prev,
               errors: {...errors, name: "Name is required!"}
            }
         }));
      }
      if(email === ""){
         setState((prev=> {
            const {errors} = prev;
            return {
               ...prev,
               errors: {...errors, email: "Email is required!"}
            }
         }));
      }
      if(phone === ""){
         setState((prev=> {
            const {errors} = prev;
            return {
               ...prev,
               errors: {...errors, phone: "Phone is required!"}
            }
         }));
      }
      const newContact = {
         id: uuidv4(),
         name,
         email,
         phone,
      }
      if (name && email && phone) {
         dispatch({ type: 'ADD_CONTACT', payload: newContact });
         setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
         });
         navigate('/', {replace: true});
      };
   }

   return (
      <Consumer>
         {value => {
            const { dispatch } = value;
            return (
               <div className="form_wrap">
                  <h4 className="title">Add contact</h4>
                  <div className="body">
                     <form onSubmit={handleOnsubmit.bind(this, dispatch)}>
                        <Input name='name' placeholder="Enter neme..." onChange={handleOnChange} value={state.name} error={state.errors.name} />
                        <Input type="email" name='email' placeholder="Enter email..." onChange={handleOnChange} value={state.email} error={state.errors.email} />
                        <Input type="number" name='phone' placeholder="Enter phone..." onChange={handleOnChange} value={state.phone} error={state.errors.phone} />

                        <button className="add_new_btn btn" type='submit'>Add New Contact</button>
                     </form>
                  </div>
               </div>
            )
         }}
      </Consumer>
   )
}

export default AddContact;