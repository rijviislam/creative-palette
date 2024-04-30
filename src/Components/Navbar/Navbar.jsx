import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyLogo from "../../assets/Creative.png";

export default function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navbar = (
    <>
      <li className="text-sm font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-sm font-semibold">
        <Link to="/allartandcraftitem">All Art & Craft Item</Link>
      </li>
      {user && (
        <>
          <li className="text-sm font-semibold">
            <Link to="/addcraftitem">Add Craft Item</Link>
          </li>
          <li className="text-sm font-semibold">
            <Link to="/myartandcraftlist">My Art & Craft List</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <Link to="/">
          <img src={MyLogo} className="w-10 h-10 rounded-full mr-3" alt="" />
        </Link>
        <a className="font-bold text-sm lg:text-xl ml-1">Creative Palette</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>

      <div className="navbar-end">
        <label className="cursor-pointer grid place-items-center mr-1 lg:mr-5">
          <input
            type="checkbox"
            onClick={toggleTheme}
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {!user ? (
          <div className="flex gap-1 lg:gap-3">
            <Link to="/login">
              <button className="btn btn-sm text-white  btn-primary">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-sm text-white  btn-primary">
                Register
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-1 lg:gap-5 items-center justify-center">
            <div className="w-10 h-10  overflow-hidden rounded-full">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
                className="w-full h-full object-cover"
                src={user?.photoURL || "https://i.ibb.co/HGCGmV3/OIP.jpg"}
              />
            </div>
            <button
              onClick={logOutUser}
              className="btn btn-sm text-white bg-red-500 border border-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
}
