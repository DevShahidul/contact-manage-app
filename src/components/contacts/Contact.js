import { useState } from 'react';
import PropTypes from 'prop-types';
import { Delete, Edit } from '@material-ui/icons';

import { Consumer } from '../../context';



const Contact = ({ contact }) => {
   const [toggle, setToggle] = useState(false);
   const { name, email, phone, id } = contact;

   const handleDelete = (id, dispatch) => {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
      console.log(id, dispatch);
   }

   return (
      <Consumer>
         {value => {
            const { dispatch } = value;

            return (
               <div className="contact">
                  <h2 className='d-flex'>
                     <span>{name}</span>
                     <button className={`btn arrow arrow-${toggle ? 'up' : 'down'} d-flex align-center justify-center`} onClick={() => setToggle((prev) => !prev)}></button>
                     <button className={`btn d-flex align-center justify-center ml-auto`} style={{ color: 'green' }}>
                        <Edit style={{ color: 'currentColor' }} />
                     </button>
                     <button className={`btn d-flex align-center justify-center`} style={{ color: 'red' }} onClick={handleDelete.bind(this, id, dispatch)}>
                        <Delete style={{ color: 'currentColor' }} />
                     </button>
                  </h2>
                  {
                     toggle &&
                     (<ul className="contact-list">
                        <li>email: {email}</li>
                        <li>phone: {phone}</li>
                     </ul>)
                  }
               </div >
            )
         }}
      </Consumer>
   )
}
export default Contact;

Contact.propTypes = {
   contact: PropTypes.object.isRequired,
   // handleDelete: PropTypes.func.isRequired,
}