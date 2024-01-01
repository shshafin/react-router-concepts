import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      {/* Fixed part */}
      <nav>
        <div className="navbar bg-primary text-primary-content">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Amazon</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* children */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};
export default MainLayouts;
