import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterData, schema } from "../register/validator";

const Register = () => {
  const { register, handleSubmit } = useForm<TRegisterData>({
    resolver: zodResolver(schema),
  });
  return (
    <main>
      <h2>Register</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" {...register("name")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="phone">Phone</label>
        <input type="phone" id="phone" {...register("phone")} />
      </form>
    </main>
  );
};
export default Register;
