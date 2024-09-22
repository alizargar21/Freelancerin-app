import React from "react";
import DashboardLayout from "../features/owner/DashboardLayout";
import DashboardStats from "../features/owner/DashboardStats";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import Loading from "../ui/Loading";

const OwnerDashboard = () => {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardLayout />
      <DashboardStats projects={projects} />
    </div>
  );
};

export default OwnerDashboard;
