interface IContacts {
  element: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
}

const Contact = ({ element }: IContacts) => {
  return (
    <li>
      <p>Nome: {element.name}</p>
      <p>Email: {element.email}</p>
      <p>Telefone: {element.phone}</p>
    </li>
  );
};
export default Contact;
