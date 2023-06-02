import { AuthProvider } from "./providers/AuthProvider";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

export default App;
