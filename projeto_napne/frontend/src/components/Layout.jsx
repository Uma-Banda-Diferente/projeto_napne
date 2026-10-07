import { HeaderBase } from "./HeaderBase";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <HeaderBase/>
            <Outlet/>
            <Footer/>
        </div>
    );
}