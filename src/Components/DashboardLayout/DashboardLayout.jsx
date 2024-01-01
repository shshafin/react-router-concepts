import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex p-5 ">
        <div className=" w-[20%] ">
          <ul className=" bg-gray-400 p-5 space-y-7">
            <li className="border-2 border-red-700 p-2 ">
              <Link to={`/Dashboard`}>Dashboard</Link>
            </li>
            <li className="border-2 border-red-700 p-2 ">
              <Link to={`/Dashboard/Profile`}>Profile</Link>
            </li>
            <li className="border-2 border-red-700 p-2">
              <Link to={`/Dashboard/EditProfile`}>Edit Profile</Link>
            </li>
          </ul>
        </div>
        <div className="w-[80%] mx-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
