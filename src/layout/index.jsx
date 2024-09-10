import { Outlet } from "react-router-dom";
import Header from "../component/header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
