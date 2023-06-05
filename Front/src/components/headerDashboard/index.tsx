import { useNavigate } from "react-router-dom";
import { HeaderConteiner } from "./style";

const HeaderDashboard = () => {
  const navigate = useNavigate();

  return (
    <HeaderConteiner>
      <div>
        <h1>ContactsHub</h1>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.clear();
              setTimeout(() => navigate("/"), 1000);
            }}
          >
            Sair
          </button>
        </div>
      </div>
    </HeaderConteiner>
  );
};
export default HeaderDashboard;
