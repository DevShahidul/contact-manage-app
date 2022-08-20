
import { Consumer } from '../../context';
import Contact from './Contact';
const Contacts = () => {

   return (
      <Consumer>
         {value => {
            const { contacts } = value;
            return (
               <>
                  {contacts.map((contact, index) => <Contact key={index} contact={contact} />)}
               </>
            )
         }}
      </Consumer>
   );
}
export default Contacts;