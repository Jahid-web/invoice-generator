import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/authContextProvider";
import { LuLoader2 } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import Toastify from "../utils/Toastify";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { signIn, signWithGoogle, currentUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(user.email, user.password);
    } catch (error) {
      setLoading(false);
      setError("Failed to login an account!");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      signWithGoogle();
    } catch (error) {
      setLoading(false);
      setError("Failed to login an account!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="dark:bg-gray-900 w-screen h-screen flex justify-center items-center">
      {currentUser && <Navigate to="/" replace={true} />}
      <div className="relative mx-auto w-full max-w-md bg-white dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-400">
              Sign in
            </h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer peer w-full border-b-2 border-gray-300 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-800 py-2 rounded-lg placeholder:text-transparent focus:border-gray-300 dark:focus:border-gray-700 focus:ring-0 focus:outline-none"
                  autoComplete="NA"
                  value={user.email}
                  onChange={handleChange}
                />
                <label className="pointer-events-none top-0 absolute bg-gray-50 dark:bg-gray-800 left-4 origin-left -translate-y-1/2 transform text-sm text-gray-800  opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800 dark:peer-focus:text-gray-400">
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer peer w-full border-b-2 border-gray-300 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-800 py-2 rounded-lg placeholder:text-transparent focus:border-gray-300 dark:focus:border-gray-700 focus:ring-0 focus:outline-none"
                  value={user.password}
                  onChange={handleChange}
                />
                <label className="pointer-events-none top-0 absolute bg-gray-50 dark:bg-gray-800 left-4 origin-left -translate-y-1/2 transform text-sm text-gray-800  opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800 dark:peer-focus:text-gray-400">
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full text-center rounded-md bg-gray-900 dark:bg-slate-200 dark:text-gray-900 dark:hover:bg-slate-300 px-3 py-2 text-white focus:bg-gray-600 focus:outline-none hover:bg-gray-800"
                >
                  {!loading ? (
                    "Sign in"
                  ) : (
                    <span className="flex items-center justify-center">
                      <LuLoader2 className="animate-spin h-5 w-5 mr-3" />
                      loading...
                    </span>
                  )}
                </button>
              </div>
              {error && (
                <span className="text-sm text-red-400  text-center">
                  {error}
                </span>
              )}
              <p className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?
                <Link
                  to={"/signup"}
                  className="font-semibold dark:text-gray-400 text-gray-600 hover:underline focus:text-gray-800 focus:outline-none ml-2"
                >
                  Sign up
                </Link>
                .
              </p>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center rounded-lg w-full justify-center mt-4 bg-gray-900 dark:bg-slate-200 dark:text-gray-900 dark:hover:bg-slate-300 text-white focus:bg-gray-600  hover:bg-gray-800"
              >
                {!loading ? (
                  <>
                    <div className="px-4 py-2">
                      <FcGoogle className="text-lg" />
                    </div>
                    <h1 className="px-4 py-2 text-center text-gray-600 font-semibold">
                      Sign in with Google
                    </h1>
                  </>
                ) : (
                  <span className="flex items-center justify-center py-2">
                    <LuLoader2 className="animate-spin h-5 w-5 mr-3" />
                    loading...
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
