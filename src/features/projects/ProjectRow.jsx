import React, { useEffect, useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
const ProjectRow = ({ project, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td> {project?.category?.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <Button
              className=""
              title={<TbPencilMinus className="w-5 h-5 text-primary-900" />}
              onClick={() => setIsEditOpen(true)}
            />

            <Modal
              title={"this is modal"}
              onClose={() => setIsEditOpen(false)}
              isOpen={isEditOpen}
            />
        
          </>
          <>
            <Button
              title={<HiOutlineTrash className="w-5 h-5 text-error"/>}
              onClick={() => setIsDeleteOpen(true)}
            />

            <Modal
              title={`حذف ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}
              isOpen={isDeleteOpen}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: (data) => setIsDeleteOpen(false),
                  })
                }
                isDisabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
