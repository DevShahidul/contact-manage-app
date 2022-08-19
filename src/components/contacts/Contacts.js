
import { Consumer } from '../../context';
import Contact from './Contact';
import New from './New';
const Contacts = () => {

   return (
      <Consumer>
         {value => {
            const { contacts } = value;
            return (
               <>
                  <New />
                  {contacts.map((contact, index) => <Contact key={index} contact={contact} />)}
               </>
            )
         }}
      </Consumer>
   );
}
export default Contacts;