import { CenterPosition } from "@syncfusion/ej2/maps";
import React from "react";
import { Detector } from "react-detect-offline";
import { BsWifiOff } from "react-icons/bs";

export const CheckCpnnection = (props) => {
  return (
    <div>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div className="flex mt-10 justify-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <div className="flex flex-col items-center pb-10">
               
                  <BsWifiOff className="font-bold text-9xl" />
               
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  SIN CONEXIÓN
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Verifica tu conexión a internet
                </span>
              </div>
            </div>
          )
        }
      />
    </div>
  );
};
