import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default LayOut;
