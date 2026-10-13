import { HeaderBase } from "./HeaderBase";
import { HeaderAvancado } from "./HeaderAvancado";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({tipoHeader = "base"}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            {tipoHeader === 'base' && <HeaderBase />}
            {tipoHeader === 'avancado' && <HeaderAvancado />}
            {tipoHeader === 'completo' && <HeaderAvancado temBotaoExtra />}
            <Outlet/>
            <Footer/>
        </div>
    );
}