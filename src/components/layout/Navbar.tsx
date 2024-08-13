"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import LoginModal from "../modal/LoginModal";
import SignUpModal from "../modal/SignUpModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Avatar } from "@nextui-org/react";
import { logoutUser, setUser } from "@/redux/api/features/authSlice";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // console.log(user, "nambar");
  const navlinks = [
    { title: "Home", href: "/", id: 11 },
    { title: "Buy", href: "/buy", id: 1 },
    { title: "Sell", href: "/sell", id: 2 },
    { title: "Services", href: "/services", id: 3 },
    { title: "About", href: "/about", id: 4 },
  ];

  return (
    <header className="flex  py-6 px-2 md:px-20 bg-[#ECF5FF]  relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <Link
          href="/"
          className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="w-[100px] h-[60px] object-contain"
          />
        </Link>
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link href="/">
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                  className="w-[100px] h-full object-cover"
                />
              </Link>
            </li>

            {navlinks.map((link) => (
              <li key={link.id} className="max-lg:border-b max-lg:py-3 px-3">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {user ? (
          <div className="flex items-center gap-8">
            <Link href="/menage-rentals">Manage Rentals</Link>
            <Avatar name={user.email} />
            <button
              className="font-semibold"
              onClick={() => {
                dispatch(logoutUser());
                Swal.fire("You have been logged out");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center ml-auto space-x-6">
            <LoginModal />
            <SignUpModal />
            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
