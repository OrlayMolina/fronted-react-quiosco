import { Outlet } from "react-router-dom";
import Resumen from "../components/Resumen";
import Sidebar from "../components/Sidebar.jsx";

export default function Layout() {

    return (
        <div className="md:flex">
            <Sidebar/>

            <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-4">
                <Outlet/>
            </main>

            <Resumen/>
        </div>
    )
}
