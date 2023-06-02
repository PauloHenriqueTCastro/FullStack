import { createContext, ReactNode } from "react";
import { TLoginData } from "./../pages/login/validator";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
interface IAuthProviderProps {
  children: ReactNode;
}
interface IAuthContextValues {
  singIn: (data: TLoginData) => void;
}
const AuthContext = createContext({} as IAuthContextValues);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  const singIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("your: token", token);
      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider value={{ singIn }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
