import React, { useState } from 'react';
import { Consumer } from '../../context';
import Input from '../input';
import { v4 as uuidv4 } from 'uuid';

const New = () => {
   const [state, setState] = useState({
      name: '',
      email: '',
      phone: ''
   })
   const handleOnChange = (e) => {
      setState(prev => {
         return {
            ...prev,
            [e.target.name]: e.target.value
         }
      })
   }

   const handleOnsubmit = (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = state;
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
            phone: ''
         })
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
                        <Input name='name' placeholder="Enter neme..." onChange={handleOnChange} value={state.name} />
                        <Input type="email" name='email' placeholder="Enter email..." onChange={handleOnChange} value={state.email} />
                        <Input type="number" name='phone' placeholder="Enter phone..." onChange={handleOnChange} value={state.phone} />

                        <button className="add_new_btn btn" type='submit'>Add New Contact</button>
                     </form>
                  </div>
               </div>
            )
         }}
      </Consumer>
   )
}

export default New