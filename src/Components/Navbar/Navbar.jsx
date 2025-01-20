import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("/");
  const { getTotalUserRegister } = useContext(ShopContext);

  useEffect(() => {
    setMenu(`${location.pathname.replace(/\//g, "")}`);
  }, [location]);

  return (
    <div className="navbar bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-opacity-80 backdrop-blur-lg sm:gap-20 sm:justify-between">
      <div className="">
        <Link to="/" className="btn btn-ghost text-xl">
          Feel Friends
        </Link>
      </div>

      {/* เมนูสำหรับขนาดหน้าจอเล็กกว่า md */}
      {/* <div className="dropdown dropdown-bottom md:hidden">
        <div tabIndex={0} role="button" className="btn m-1">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/mens">Mens</Link>
          </li>
          <li>
            <Link to="/womens">Womens</Link>
          </li>
          <li>
            <Link to="/boys">Boys</Link>
          </li>
        </ul>
      </div> */}

      {/* เมนูสำหรับหน้าจอที่ใหญ่กว่า md */}
      <div className="mr-5">
        <ul className="flex align-center list-none text-neutral-200 text-lg gap-5 justify-between w-50">
          <li>
            <Link onClick={() => setMenu("friends")} to="/friends">
              Friends
            </Link>
            {menu === "friends" ? <hr /> : <></>}
          </li>
          <li>
            <Link onClick={() => setMenu("mens")} to="/mens">
              Mens
            </Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li>
            <Link onClick={() => setMenu("womens")} to="/womens">
              Womens
            </Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li>
            <Link onClick={() => setMenu("boys")} to="/boys">
              Boys
            </Link>
            {menu === "boys" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      <Link to="/notifications-register">
        <div className="relative inline-block">
          {/* Bell Icon with a Clean Design */}
          <div className="relative inline-flex items-center justify-center bg-gray-100 rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.866-2.91-7-6.5-7S5 7.134 5 11v3.159c0 .538-.214 1.055-.595 1.436L3 17h5m7 0a3.5 3.5 0 11-7 0m7 0H8"
              />
            </svg>
            <div className="badge absolute top-0 left-3 bg-red-500 text-white text-xs">
              {getTotalUserRegister()}
            </div>
          </div>
        </div>
      </Link>

      {/* ส่วนอื่นๆ */}
      {/* <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {getTotalCartItems()}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {getTotalCartItems()} Items
              </span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/signin">ลงชื่อเข้าใช้</Link>
            </li>
            <li>
              <a>ตั้งค่า</a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
