import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";

const ProjectsHeader = () => {
  const { transformedCategories } = useCategories();
  console.log(transformedCategories);
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className=" text-lg font-bold">لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          filterField={"category"}
          options={
            [ {value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories]
          }
        />
      </div>
    </div>
  );
};

export default ProjectsHeader;
