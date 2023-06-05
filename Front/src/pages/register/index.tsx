import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterData, schema } from "../register/validator";
import { useRegister } from "../../hooks/userRegister";
import { MainConteiner } from "./style";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Form } from "../../styles/form";

const Register = () => {
  const { userRegister } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(schema),
  });
  console.log(errors);
  return (
    <MainConteiner>
      <Header />
      <Form onSubmit={handleSubmit(userRegister)}>
        <h2>Cadastro</h2>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" {...register("name")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="phone">Phone</label>
        <input type="phone" id="phone" {...register("phone")} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Cadastre-se</button>
      </Form>
      <Footer />
    </MainConteiner>
  );
};
export default Register;
