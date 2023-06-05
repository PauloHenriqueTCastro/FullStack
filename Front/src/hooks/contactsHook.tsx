import { useContext } from "react";
import { ContactsRegisterContext } from "../providers/ContactsProvider";
const useContactsRegisterContext = () => {
  const contactsRegisterContext = useContext(ContactsRegisterContext);
  return contactsRegisterContext;
};
export { useContactsRegisterContext };
