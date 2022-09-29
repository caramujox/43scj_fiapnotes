import { AuthProvider } from "./Context/AuthContext";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./routes";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
