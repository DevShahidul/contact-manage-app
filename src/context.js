import React, { useState } from 'react';
import { contactsData } from './data/app-data';

const Context = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case 'DELETE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
         }
      case 'ADD_CONTACT':
         return {
            ...state,
            contacts: [action.payload, ...state.contacts]
         }
      default:
         return state;
   }
}

const Provider = (props) => {
   const [state, setState] = useState({
      contacts: contactsData,
      dispatch: action => setState(prevState => reducer(prevState, action))
   });

   return (
      <Context.Provider value={state}>
         {props.children}
      </Context.Provider>
   )
};
export default Provider;

export const Consumer = Context.Consumer;
