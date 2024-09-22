import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

const DashboardStats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );
  return (
    <div className="grid grid-cols-2 gap-8">
      <Stat
        color="primary"
        icon={<HiOutlineViewGrid className="h-20 w-20" />}
        title={"کل پروژه ها"}
        value={numOfProjects}
      />
      <Stat
        color="green"
        icon={<HiCurrencyDollar className="h-20 w-20" />}
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
      />
      <Stat
        color="orange"
        icon={<HiCollection className="h-20 w-20" />}
        title="درخواست ها"
        value={numOfProposals}
      />
    </div>
  );
};

export default DashboardStats;
