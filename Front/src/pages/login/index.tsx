import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, schema } from "./validator";
import { useAuth } from "../../hooks/userAuth";
import Header from "../../components/header";
import { MainConteiner } from "./style";
import Footer from "../../components/footer";
import { Form } from "../../styles/form";

const Login = () => {
  const { singIn } = useAuth();
  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });
  return (
    <MainConteiner>
      <Header />
      <Form onSubmit={handleSubmit(singIn)}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Entrar</button>
      </Form>
      <Footer />
    </MainConteiner>
  );
};
export default Login;
