import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { AuthContext } from '../../auth/AuthContext';
import avatar from "../../images/avatar.jpg";

// import { Button } from '.';
import { useStateContext } from '../../context/ContextProvider';
import { userProfileData } from '../../data/userSet';
import { Button } from './Button';

export const UserProfile = () => {
    const {auth}=useContext(AuthContext);
    const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
    <div className="flex justify-between items-center">
      <p className="font-semibold text-lg dark:text-gray-200">Perfil</p>
      <Button
        icon={<MdOutlineCancel />}
        color="rgb(153, 171, 180)"
        bgHoverColor="light-gray"
        size="2xl"
        borderRadius="50%"
      />
    </div>
    <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
      
       {auth.foto ? (
             <img
             className="rounded-full h-24 w-24"
             src={avatar}
             alt="user-profile"
           />
            ) : (
              <span className="rounded-full w-24 h-24">
                <FaUser className="rounded-full w-8 h-8 text-gray-400" />{" "}
              </span>
            )}
      <div>
        <p className="font-semibold text-xl dark:text-gray-200">{auth.name} </p>
        <p className="text-gray-500 text-sm dark:text-gray-400"> {auth.roll}  </p>
        <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {auth.email}</p>
      </div>
    </div>
    <div>
      {userProfileData.map((item, index) => (
        <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
          <button
            type="button"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className=" text-xl rounded-lg p-3 hover:bg-light-gray"
          >
            {item.icon}
          </button>

          <div>
            <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
            <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5">
      <Button
        color="white"
        bgColor={currentColor}
        text="Logout"
        borderRadius="10px"
        width="full"
      />
    </div>
  </div>
  )
}
