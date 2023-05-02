import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Base() {
  return (
    <div className="flex flex-col justify-between items-center	 bg-white text-black dark:bg-black dark:text-white text-base font-inter duration-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
