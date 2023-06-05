import { useNavigate } from "react-router-dom";
import { HeaderConteiner } from "./style";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderConteiner>
      <div>
        <h1>ContactsHub</h1>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Login
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            Cadastro
          </button>
        </div>
      </div>
    </HeaderConteiner>
  );
};
export default Header;
