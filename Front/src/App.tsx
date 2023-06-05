import { AuthProvider } from "./providers/AuthProvider";
import { ContactsRegisterProvider } from "./providers/ContactsProvider";
import { RegisterProvider } from "./providers/RegisterProvider";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ContactsRegisterProvider>
        <RegisterProvider>
          <AuthProvider>
            <RoutesMain />
          </AuthProvider>
        </RegisterProvider>
      </ContactsRegisterProvider>
    </>
  );
};

export default App;
