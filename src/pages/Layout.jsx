import Footer from "../Component/Footer";
import Header from "../component/Header";
import { Outlet } from "react-router";

export function Layout() {
    return (
        <section>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </section>
    )
}