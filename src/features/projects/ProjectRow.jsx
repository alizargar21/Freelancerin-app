import React, { useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import {HiOutlineTrash } from "react-icons/hi"
import {TbPencilMinus } from "react-icons/tb"
import Modal from "../../ui/Modal";

const ProjectRow = ({ project, key, index }) => {
  const [isEditOpen , setIsEditOpen] = useState(false)



  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(p.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge-secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge-success">باز</span>
        ) : (
          <span className="badge badge-danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex">
          <button className="" onClick={setIsEditOpen(true)}>
            <TbPencilMinus />
            <Modal title={"this is modal"} onClose={()=>setIsEditOpen(false)} isOpen={isEditOpen}  />
          </button>
        <button>
        <HiOutlineTrash />

        </button>
        </div>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
