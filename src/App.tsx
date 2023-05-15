import { Home } from "./pages";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <ToastContainer
        autoClose={2500}
        position="top-right"
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;
