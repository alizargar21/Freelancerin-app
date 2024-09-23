import React from "react";
import Loading from "../../ui/Loading";
import DashboardHeader from "./DashboardHeader";
import  useProposals  from "../proposal/useProposals";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
};

export default DashboardLayout;
