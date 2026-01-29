import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
