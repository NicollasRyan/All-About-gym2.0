import { Outlet } from "react-router";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
