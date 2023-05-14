import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Base() {
  return (
    <div className="overflow-y-scroll overflow-x-hidden h-screen flex flex-col justify-between items-center bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text text-base font-inter duration-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
