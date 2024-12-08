import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return <>
    <NavBar/>
    <ToastContainer />
    <Outlet/>
  </>;
};

export default MainLayout;
