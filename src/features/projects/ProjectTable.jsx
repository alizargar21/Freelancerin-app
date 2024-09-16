import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName=" پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>کارفرما</th>
      </Table.Header>
      <Table.Body>
        {projects.map((p, index) => (
          <ProjectRow project={p} index={index} key={p._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectsTable;
