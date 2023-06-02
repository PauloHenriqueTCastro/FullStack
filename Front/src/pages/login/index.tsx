import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, schema } from "./validator";
import { useAuth } from "../../hooks/userAuth";

const Login = () => {
  const { singIn } = useAuth();
  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });
  return (
    <main>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(singIn)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
      </form>
    </main>
  );
};
export default Login;
