import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";

const OwnerLayout = ({ children }) => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink path="dashboard" icon={<HiHome />} title={"داشبورد"} />

        <CustomNavLink
          path="projects"
          icon={<HiCollection />}
          title={" پروژه ها"}
        />

        {/* <NavLink to={"/owner/dashboard"}></NavLink> */}
      </Sidebar>
    </AppLayout>
  );
};

export default OwnerLayout;
