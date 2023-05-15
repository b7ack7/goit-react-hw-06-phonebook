import {  useSelector } from "react-redux";
import { Contact } from 'components/Contact';
import { ContactListWrapper } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
    const visibleContacts = contacts.filter(contact =>  contact.name.toLocaleLowerCase().includes(filter));
    return (
        <ContactListWrapper >{
            visibleContacts.map(contact => {
                return (<Contact key={contact.id} 
               {...contact}/>)
            })
        }
        </ContactListWrapper>
  
    )
}



