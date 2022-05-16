import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const [SDD, TSDD] = useState(false);
  return (
    <>
      <nav
        className="nav-container w-full h-24 lngr flex absolute "
        onMouseEnter={() => {
          TSDD(false);
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tetra_Tech_logo.png"
            alt=""
            className="flex-row my-4 w-44 h-16 md:mx-10 sm:mx-5 "
          />
        </div>
        <motion.div
          className="lg:flex flex-row my-auto ml-16 mr-10 font-medium text-xl roboto cursor-pointer sm:hidden"
          whileHover={{
            scale: 1.2,
            backgroundColor: "#D3D3D3",
            padding: "5px 15px",
            borderRadius: "10px",
          }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          About
        </motion.div>
        <motion.div
          className="lg:flex flex-row my-auto mx-10 font-medium text-xl roboto cursor-pointer sm:hidden"
          whileHover={{
            scale: 1.2,
            backgroundColor: "#D3D3D3",
            padding: "5px 15px",
            borderRadius: "10px",
          }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          Contact
        </motion.div>

        <motion.div
          className="md:flex flex-col tato2 mx-10 font-medium text-xl roboto cursor-pointer sm:hidden  "
          onMouseEnter={() => {
            TSDD(true);
          }}
        >
          Services
          <AnimatePresence>
            {SDD && (
              <motion.div
                className="dropdown-container lg:flex flex-col bg-stone-800 my-6 font-normal text-slate-200 py-2 pr-2 rounded-md text-lg roboto -ml-4 trans-top md:hidden "
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <motion.span
                  className="pl-4 pr-12 py-0.5  "
                  whileHover={{
                    color: "D3D3D3",
                    scale: 1.1,
                    marginLeft: "4px",
                  }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  Frontend
                </motion.span>
                <motion.span
                  className="pl-4 pr-12 py-0.5 "
                  whileHover={{ color: "D3D3D3", fontSize: "20px" }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  Backend
                </motion.span>
                <motion.span
                  className="pl-4 pr-12 py-0.5 "
                  whileHover={{ color: "D3D3D3", fontSize: "20px" }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  Ai{" "}
                </motion.span>
                <motion.span
                  className="pl-4 pr-12 py-0.5 "
                  whileHover={{ color: "D3D3D3", fontSize: "20px" }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  Crypto
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.button
          className="lg:flex flex-row  absolute rvw tato font-light text-xl roboto cursor-pointer px-10 rounded-3xl py-2 bg-gray-800 text-slate-100 p-auto sm:hidden"
          whileHover={{
            scale: 1.1,
            fontWeight: 500,
          }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          Sign in
        </motion.button>
        <div className="ham-container  sm:flex flex-col p-3 space-y-2 bg-gray-600 rounded shadow absolute rvw2 lg:hidden ">
          {" "}
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
