import { Outlet } from "react-router";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
}

export default App;
