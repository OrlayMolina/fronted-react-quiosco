import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div>
            Desde el layout
            <Outlet/>
        </div>
    )
}
