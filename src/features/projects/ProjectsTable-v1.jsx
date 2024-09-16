import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName=" پروژه ای"  />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>کارفرما</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td>{index + 1}</td>
              <td>{truncateText(p.title , 30)}</td>
              <td>{p.category.title}</td>
              <td>{toPersianNumbersWithComma(p.budget)}</td>
              <td>{toLocalDateShort(p.deadline)}</td>
              <td>
                
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                
                  {p.tags.map((tag) => (
                    <span className="badge badge-secondary" key={tag}>{tag}</span>
                  ))}
                </div>
              </td>
              <td>{p.freelancer?.name}</td>
              <td>
                {p.status === "OPEN" ? <span className="badge badge-success">باز</span> : <span className="badge badge-danger">بسته</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
