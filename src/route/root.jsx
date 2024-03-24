import React from "react";
import { useAuthContext } from "../context/auth/authContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const Root = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Root;
