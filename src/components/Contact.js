import { useState } from 'react';
import PropTypes from 'prop-types';
import { Delete, Edit } from '@material-ui/icons';





const Contact = ({ contact, handleDelete }) => {
   const [toggle, setToggle] = useState(false);
   const { name, email, phone } = contact;

   return (
      <div className="contact">
         <h2 className='d-flex'>
            <span>{name}</span>
            <button className={`btn arrow arrow-${toggle ? 'up' : 'down'} d-flex align-center justify-center`} onClick={() => setToggle((prev) => !prev)}></button>
            <button className={`btn d-flex align-center justify-center ml-auto`} style={{ color: 'green' }}>
               <Edit style={{ color: 'currentColor' }} />
            </button>
            <button className={`btn d-flex align-center justify-center`} style={{ color: 'red' }} onClick={handleDelete}>
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
}
export default Contact;

Contact.propTypes = {
   contact: PropTypes.object.isRequired,
   handleDelete: PropTypes.func.isRequired,
}