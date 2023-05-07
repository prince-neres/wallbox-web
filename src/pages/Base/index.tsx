import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Base() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-black dark:bg-black dark:text-white text-base font-inter duration-500 crollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
