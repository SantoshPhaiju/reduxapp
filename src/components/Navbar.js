import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector(state => state.amount);
  return (
    <div>
      <nav
        className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700  shadow-lg navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link className="text-xl text-black" to="/">
            State bank of Santosh and the Company
            </Link>
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto items-center">
              <li className="nav-item px-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
              <button className="btn bg-blue-600 text-white px-4 py-2 rounded-sm" disabled={true}>Your balance: {amount}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
