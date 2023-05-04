import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Base() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-black dark:bg-black dark:text-white text-base font-inter duration-500">
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}
