
import { contactsData } from '../data/app-data';
import { useEffect, useState } from 'react';

import Contact from './Contact';
const Contacts = () => {
   const [contacts, setContacts] = useState([]);
   useEffect(() => {
      setContacts(contactsData);
   }, []);

   const onDelete = (id) => {
      const newContact = contacts.filter(contact => contact.id !== id);
      setContacts(newContact);
      console.log('Clicked');
      console.log(id);
   }

   return contacts.map((contact, index) => <Contact key={index} contact={contact} handleDelete={onDelete.bind(this, contact.id)} />);
}
export default Contacts;