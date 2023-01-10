import React, { useContext, useEffect } from "react";
import "../css/login.css";
import { SiDependabot } from "react-icons/si";

import { AuthContext } from "../auth/AuthContext";
import { useForm } from "../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [values, handleInputChange, setFormValue] = useForm({
    user: "",
    password: "",
    rememberme: false,
  });

  useEffect(() => {
    setUser();
  }, []);
  const setUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setFormValue((values) => ({
        ...values,
        user,
        rememberme: true,
      }));
    }
  };
  const toggleCheck = () => {
    setFormValue({
      ...values,
      rememberme: !values.rememberme,
    });
  };
  const onSubmit = async (ev) => {
    ev.preventDefault();

    values.rememberme
      ? localStorage.setItem("user", values.user)
      : localStorage.removeItem("user");

    const { user, password } = values;

    const ok = await login(user, password);
    // console.log(ok);
    if (!ok) {
      toast.error("Error, verifica que tus datos sean correctos!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const todoOk = () => {
    return values.user.length > 0 && values.password.length > 0 ? true : false;
  };
  return (
    <div className="flex-container text-center">
      {" "}
      <div className="flex justify-center shadow-2xl">
        <div className="block rounded-lg shadow-2xl selection:max-w-sm text-center">
          <div className="block p-6 rounded-lg shadow-2xl shadow-cyan-300 max-w-sm">
            <form onSubmit={onSubmit}>
              <div>
                <div className="flex items-center align-middle text-2xl text-center font-extrabold text-white justify-evenly">
                  <img src={logo} alt="rwt" width="50%" className="mb-2" />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="user"
                    placeholder="Usuario"
                    value={values.user}
                    onChange={handleInputChange}
                    className="form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputuser2"
                    aria-describedby="userHelp"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
                    name="password"
                    className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div
                    className="form-group form-check"
                    onClick={() => toggleCheck()}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                      name="rememberme"
                      checked={values.rememberme}
                      readOnly
                    />
                    <label
                      className="form-check-label inline-block text-yellow-50"
                      htmlFor="exampleCheck2"
                    >
                      Recordar
                    </label>
                  </div>
                  {/* <a
                    href="#!"
                    className="text-yellow-400  hover:text-white focus:text-blue-700 transition duration-200 ease-in-out"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type="submit"
                  disabled={!todoOk()}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className={`rounded-full inline-block px-6 py-2.5 bg-blue-600 ${
                    !todoOk() && `opacity-60`
                  }  text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
                >
                  Ingresar al administrador
                </button>{" "}
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
