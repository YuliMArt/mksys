import React from "react";
import { NavLink } from "react-router-dom";

export const Breadcrumb = ({ bread, plus = "" ,mb="mb-3" }) => {
  return (
    <nav className={`${mb} flex`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {bread.map((it, i) => (
          <div key={i}>
            {it.to ? (
              <NavLink
                to={it.to}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>

                {it.title}
              </NavLink>
            ) : (
              <span className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>

                {it.title}{"  "} 
              </span>
            )}
          </div>
        ))}
      </ol>
      <span className="inline-flex mt-1 ml-2 text-sm font-medium text-blue-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
         {plus}
      </span>
    </nav>
  );
};
