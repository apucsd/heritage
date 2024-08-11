/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-20 tracking-wide bg-[#ECF5FF]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-6 gap-y-10">
        <div className="">
          <Link href="/">
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="w-[50px] h-[70px] object-cover"
            />
          </Link>
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div>
          <h4 className=" font-semibold text-lg relative max-sm:cursor-pointer">
            Services{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 "
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name={16}
                data-original="#000000"
              />
            </svg>
          </h4>
          <ul className="mt-6 space-y-5">
            <li>
              <a className="  text-sm">Web Development</a>
            </li>
            <li>
              <a className="  text-sm">Pricing</a>
            </li>
            <li>
              <a className="  text-sm">Support</a>
            </li>
            <li>
              <a className="  text-sm">Client Portal</a>
            </li>
            <li>
              <a className="  text-sm">Resources</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className=" font-semibold text-lg relative max-sm:cursor-pointer">
            Platforms{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 "
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name={16}
                data-original="#000000"
              />
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a className="  text-sm">Hubspot</a>
            </li>
            <li>
              <a className="  text-sm">Integration Services</a>
            </li>
            <li>
              <a className="  text-sm">Marketing Glossar</a>
            </li>
            <li>
              <a className="  text-sm">UIPath</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className=" font-semibold text-lg relative max-sm:cursor-pointer">
            Company{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 "
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name={16}
                data-original="#000000"
              />
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a className="  text-sm">About us</a>
            </li>
            <li>
              <a className="  text-sm">Careers</a>
            </li>
            <li>
              <a className="  text-sm">Blog</a>
            </li>
            <li>
              <a className="  text-sm">Portfolio</a>
            </li>
            <li>
              <a className="  text-sm">Events</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className=" font-semibold text-lg relative max-sm:cursor-pointer">
            Additional{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 "
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name={16}
                data-original="#000000"
              />
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a className="  text-sm">FAQ</a>
            </li>
            <li>
              <a className="  text-sm">Partners</a>
            </li>
            <li>
              <a className="  text-sm">Sitemap</a>
            </li>
            <li>
              <a className="  text-sm">Contact</a>
            </li>
            <li>
              <a className="  text-sm">News</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-10 border-gray-400" />
      <div className="flex -mb-10 justify-between">
        <div>
          <p>© Heritage Nest. All rights reserved.</p>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="javascript:void(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-[#0059B1] inline  w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="t ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-[#0059B1] inline  w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="t ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-[#0059B1] inline  w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="t ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-[#0059B1] inline  w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
