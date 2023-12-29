import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { Link } from "react-router-dom";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Ai {""}
            <span className="font-bold text-[#c29525]">-Architect</span>
          </h1>
        </Link>
      </div>
      <div className="bg-gray-200 rounded-full flex justify-center m-auto  items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="search meals"
        />
      </div>
      <Link to="/login">
        <button className="bg-[#c29525] text-white hidden md:flex ml-auto py-2  rounded-full">
          login
        </button>
      </Link>

      <Link to="/register">
        {" "}
        <button className="bg-[#c29525] text-white hidden md:flex items-center ml-2 py-2 rounded-full">
          Register
        </button>
      </Link>

      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Ai {""}
          <span className="text-[#c29525] font-bold">-Architect</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <Link to="/">
              {" "}
              <li className="text-xl py-4 flex">
                <FaHome
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Home
              </li>
            </Link>
            <Link to="/about-project">
              <li className="text-xl py-4 flex">
                <FaInfoCircle
                  href=""
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                About Project
              </li>
            </Link>
            <Link to="/team">
              <li className="text-xl py-4 flex">
                <FaUsers
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Team
              </li>
            </Link>

            <Link to="/contact-us">
              <li className="text-xl py-4 flex">
                <FaEnvelope
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
