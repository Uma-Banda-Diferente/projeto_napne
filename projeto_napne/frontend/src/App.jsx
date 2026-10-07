import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/Login";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Login/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;