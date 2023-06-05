import { ReactNode, createContext } from "react";
import { TRegisterContactsData } from "../pages/dashboard/validators";
import { api } from "../service/api";

interface IRegisterProviderProps {
  children: ReactNode;
}
interface IRegisterContextValues {
  contactsRegister: (data: TRegisterContactsData) => void;
}
const ContactsRegisterContext = createContext({} as IRegisterContextValues);

const ContactsRegisterProvider = ({ children }: IRegisterProviderProps) => {
  const contactsRegister = async (data: TRegisterContactsData) => {
    try {
      const response = await api.post("/contacts", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactsRegisterContext.Provider value={{ contactsRegister }}>
      {children}
    </ContactsRegisterContext.Provider>
  );
};

export { ContactsRegisterContext, ContactsRegisterProvider };
