import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../ui/Button";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";
const Logout = () => {
  const { isPending, logout } = useLogout();
  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <Button
          title={
            <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error " />
          }
          onClick={logout}
          className={""}
        />
      )}
    </>
  );
};

export default Logout;
