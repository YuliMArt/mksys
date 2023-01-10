import { Modal } from "flowbite-react";
import React from "react";
import { fetchConToken } from "../../api/fetch";
import { useContextInfo } from "../../context/ContextInfo";
export const Confirmation = ({ show, onClose, info,callBk }) => {
  const { setResp } = useContextInfo();

  const { id, type } = info;

  const delet = async () => {
    const res = await fetchConToken(`main/${type}/${id}`, {}, "DELETE");
    setResp(res);
    callBk();
    onClose();
  };

  return (
    <Modal show={show} size="sm" onClose={onClose}>
      <Modal.Header>Eliminar {info.type}</Modal.Header>
      <Modal.Body>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Está seguro que desea eliminar el/la {info.type} seleccionado?
              </h3>
              <button
                type="button"
                onClick={delet}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Si,Eliminar
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
