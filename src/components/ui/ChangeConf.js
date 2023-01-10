import { Modal } from "flowbite-react";
import React from "react";
import { fetchConToken } from "../../api/fetch";
import { useContextInfo } from "../../context/ContextInfo";

export const ChangeConf = ({ show, onClose, info, callbk }) => {
  const { setResp } = useContextInfo();
  const { data, endpoint, head, body } = info;

  const acepOk = async () => {
    const res = await fetchConToken(`${endpoint}`, { ...data }, "PUT");
    setResp(res);
    if (res.ok) {
      callbk();
    }
    onClose();
  };
  return (
    <Modal show={show} size="sm" onClose={onClose}>
      <Modal.Header>{head}</Modal.Header>
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
                {body}
              </h3>
              <button
                type="button"
                onClick={acepOk}
                className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
