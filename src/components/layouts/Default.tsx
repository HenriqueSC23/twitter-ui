import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export function Default() {
    return(
        <div className="md:grid-cols-[80px_1fr] m-auto max-w-[1000px] grid grid-cols-[300px_1fr]">
            <Sidebar />

            <div className="border-x-[1px] border-solid border-[#ebeef0] min-h-[100vh]">
                <Outlet />
            </div>
        </div>
    )
}