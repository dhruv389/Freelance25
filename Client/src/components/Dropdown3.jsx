import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="relative ml-5 inline-block text-left">
      <button
        id="dropdownHoverButton"
        onMouseEnter={() => setIsOpen(true)}
     
        className="text-white bg-yellow-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
        type="button"
      >
      Create account
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownHover"
          className="absolute z-10 mt-2 right-[1ex]  divide-y divide-gray-100 rounded-lg shadow w-44 bg-black"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2 text-sm " aria-labelledby="dropdownHoverButton">
          <li>
              <Link to="/clientcreate" className="block px-4 py-2 hover:bg-yellow-400  dark:hover:text-white">
                create Client
              </Link>
            </li>
           
            <li>
              <Link to="/devcreate" className="block px-4 py-2 hover:bg-yellow-400  dark:hover:text-white">
                create Freelancer
              </Link>
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;