import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <nav className=" md:bg-gray-800 font-poppins ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-24">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    <a
                      href="#"
                      className=" hover:bg-gray-700 text-white px-7 py-3 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>

                    <a
                      href="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-7 py-2 rounded-md text-sm font-medium"
                    >
                      About Me
                    </a>

                    <div className="flex-shrink-0">
                      <img
                        className="h-14 w-28"
                        src="https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/logo.webp"
                        alt="Logo Digimon"
                      />
                    </div>

                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-7 py-2 rounded-md text-sm font-medium"
                    >
                      Card
                    </a>

                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 hover:text-white px-7 py-2 rounded-md text-sm font-medium"
                    >
                      Reach
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className=" font-poppins absolute top-10 left-2/3 flex flex-col items-center ">
      <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden absolute top-96 bg-gray-800" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Card
                </a>
              </div>
            </div>
          )}
        </Transition>
        <div className="flex md:hidden absolute top-11 -left-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white absolute top-[31em] left-[5rem]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        
      </div>
    </>
  );
}

export default Navbar;
