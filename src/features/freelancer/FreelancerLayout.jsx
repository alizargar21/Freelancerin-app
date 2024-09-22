import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

const FreelancerLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink path="dashboard" icon={<HiHome />} title={"داشبورد"} />

        <CustomNavLink
          path="projects"
          icon={<HiCollection />}
          title={" پروژه ها"}
        />
        <CustomNavLink
          path="proposals"
          icon={<HiCollection />}
          title={"درخواست ها"}
        />
       
      </Sidebar>
    </AppLayout>
  );
};

export default FreelancerLayout;
