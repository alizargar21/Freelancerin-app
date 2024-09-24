import React, { useEffect } from "react";
import useAuthorize from "../features/Authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isAuthorized, isLoading, isVerify } = useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerify && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/not-access");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectRoute;
