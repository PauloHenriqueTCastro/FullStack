import { useForm } from "react-hook-form";
import Footer from "../../components/footer";
import { Form } from "../../styles/form";
import Contact from "./contactsCards";
import { MainConteiner } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterContactsData, schema } from "./validators";
import HeaderDashboard from "../../components/headerDashboard";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { useContactsRegisterContext } from "../../hooks/contactsHook";

const Dashboard = () => {
  const [cotacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("contacts");
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterContactsData>({
    resolver: zodResolver(schema),
  });
  const { contactsRegister } = useContactsRegisterContext();
  console.log(errors);
  return (
    <MainConteiner>
      <HeaderDashboard />
      <div>
        <Form onSubmit={handleSubmit(contactsRegister)}>
          <h2>Cadastro de contatos</h2>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone" {...register("phone")} />
          <button type="submit">Cadastre-se</button>
        </Form>
        <ul>
          <p>Contatos</p>
          {cotacts.map((e) => (
            <Contact element={e}></Contact>
          ))}
        </ul>
      </div>
      <Footer />
    </MainConteiner>
  );
};
export default Dashboard;
