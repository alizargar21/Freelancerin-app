import React from "react";
import DashboardHeader from "../../ui/DashboardHeader";
import useProposals from "../proposal/useProposals";
import Loading from "../../ui/Loading";
import useProject from "../project/useProject";
import useProjects from "../../hooks/useProjects";
import useUser from "../Authentication/useUser";
import useUsers from "./useUsers";
import Stats from "../admin/Stats";

const DashboardLayout = () => {
  const { isLoading, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();
  if (isLoading && isLoading2 && isLoading3 ) return <Loading />;
  console.log(users);
  return (
    <div>
      {" "}
      <DashboardHeader />
      <Stats proposals={proposals.length} projects={projects.length} users={users.length}/>
    </div>
  );
};

export default DashboardLayout;
