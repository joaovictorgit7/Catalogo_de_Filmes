import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Details />} />
        <Route path="/busca" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;