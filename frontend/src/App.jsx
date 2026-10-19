import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { CadastroAluno } from "./pages/CadastroAluno";
import { CadastroProfessor } from "./pages/CadastroProfessor";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Login/>}/>
        </Route>
        <Route element={<Layout tipoHeader="avancado"/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/cadastroAluno" element={<CadastroAluno/>}/>
        </Route>
        <Route element={<Layout tipoHeader="completo"/>}>
          <Route path="/cadastroProfessor" element={<CadastroProfessor/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;