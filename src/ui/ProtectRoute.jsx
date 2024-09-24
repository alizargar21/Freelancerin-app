import React, { useEffect } from "react";
import useAuthorize from "../features/Authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access" , {replace : true});
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  if (isAuthenticated && isAuthorized)  return children ;

  
};

export default ProtectRoute;
