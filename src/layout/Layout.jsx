import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "/src/components/Header";

function Layout() {
    return (
        <div>
            <Header />
            <div className="min-h-[85vh]">
                <Outlet />

            </div>
            <Footer />

        </div>
    )
}
export default Layout