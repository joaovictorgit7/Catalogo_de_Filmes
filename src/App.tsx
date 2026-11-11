import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // aqui é onde você importa o componente Home da pasta pages. O componente Home é a página principal do aplicativo e geralmente contém a interface do usuário e a lógica relacionada à página inicial do aplicativo.

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
