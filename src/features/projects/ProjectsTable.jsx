import React from "react";
import useOwnerProjects from "./useOwnerProjects";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  return <div>ProjectsTable</div>;
};

export default ProjectsTable;
