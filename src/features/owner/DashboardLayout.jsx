import React from "react";
import DashboardHeader from "../../ui/DashboardHeader";
import DashboardStats from "./DashboardStats";
import useOwnerProjects from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";

const DashboardLayout = () => {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <DashboardStats projects={projects} />
    </div>
  );
};

export default DashboardLayout;
