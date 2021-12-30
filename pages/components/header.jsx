import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const navlinks = [
    { name: "Home", url: "/" },
    { name: "Resumes", url: "/resumes" },
    { name: "Contact", url: "/contact" },
    { name: "About", url: "/about" },
  ];

  return (
    <>
      <header className="bg-indigo-900">
        <div className="mycontainer flex flex-row justify-between relative">
          <div className="flex flex-col md:flex-row lg:flex-row items-center">
            <Link href="/">
              <a className="text-white font-mono font-black text-xl md:4xl">
                CVGenerator
              </a>
            </Link>

            <nav className="hidden bg-indigo-900 md:ml-16 md:block lg:block">
              <ul className="flex flex-col md:flex-row lg:flex-row items-center">
                {navlinks.map((links, key) => {
                  return <List props={links} key={key} />;
                })}
                <Link href="/login">
                  <a className="block btn-secondary font-medium px-4 py-2">
                    Login
                  </a>
                </Link>
              </ul>
            </nav>
          </div>

          <button
            onClick={toggle}
            className="block md:hidden lg:hidden bg-white rounded-md p-1 h-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-transparent text-indigo-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="line w-screen bg-white" style={{ height: "1px" }}></div>

        {/* responsive navbar */}
        <nav
          className={`${
            active ? "" : "hidden"
          } bg-indigo-900 z-10 absolute w-screen pb-4`}
          id="res-menu"
        >
          <ul className={`p-6 flex flex-col  items-center justify-between`}>
            {navlinks.map((links, key) => {
              return <List props={links} key={key} />;
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

const List = ({ props }) => {
  return (
    <li className="hover:bg-indigo-500 w-full transition ease-in-out duration-700 rounded-md">
      <Link href={props.url}>
        <a className="block text-white font-medium px-4 py-2">{props.name}</a>
      </Link>
    </li>
  );
};

export default Header;
