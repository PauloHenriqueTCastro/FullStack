import { useContext } from "react";
import { RegisterContext } from "../providers/RegisterProvider";
const useRegister = () => {
  const resgisterContext = useContext(RegisterContext);
  return resgisterContext;
};
export { useRegister };
