import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
