import { createContext, ReactNode } from "react";
import { TRegisterData } from "../pages/register/validator";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

interface IRegisterProviderProps {
  children: ReactNode;
}
interface IRegisterContextValues {
  userRegister: (data: TRegisterData) => void;
}
const RegisterContext = createContext({} as IRegisterContextValues);

const RegisterProvider = ({ children }: IRegisterProviderProps) => {
  const navigate = useNavigate();

  const userRegister = async (data: TRegisterData) => {
    try {
      const response = await api.post("/users", data);
      console.log(response);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RegisterContext.Provider value={{ userRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterProvider };
