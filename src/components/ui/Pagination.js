import React, { useState } from "react";
import PaginationC from "react-js-pagination";

export const Pagination = ({ limit, total, callBk, active, setActive }) => {
  const onChange = (e) => {
    setActive(e);
      const li = (e - 1) * limit;
      callBk(li);
  };
  return (
    <div className="flex  justify-between mt-4">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Total de registros: {total}
      </span>
      <PaginationC
        innerClass="flex "
        activeClass="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-600 dark:text-white"
        itemClass="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activePage={active}
        itemsCountPerPage={limit}
        totalItemsCount={total}
        pageRangeDisplayed={5}
        onChange={onChange}
      />
    </div>
  );
};
