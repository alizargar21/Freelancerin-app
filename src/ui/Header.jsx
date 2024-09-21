import React from "react";
import useUser from "../features/Authentication/useUser";
import UserAvatar from "../features/Authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 ">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
      ${isLoading ? "blur-sm opacity-50" : ""}
      `}
      >
        <UserAvatar user={user} />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
