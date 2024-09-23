import React, { useState } from "react";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import Button from "../../../ui/Button";
import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal"
import truncateText from "../../../utils/truncateText";
import CreateProposal from "../../proposal/CreateProposal";
const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};
const ProjectsRow = ({ project, index }) => {
  const { status, title, deadline, budget } = project;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>

      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge  ${projectStatus[status].className} `}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal 
        isOpen={open}
        onClose={()=>setOpen(false)}
        title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposal   onClose={()=>setOpen(false)} projectId={project._id} />
        </Modal>

        <Button
          title={<MdAssignmentAdd className="w-5 h-5 text-primary-600" />}
          onClick={()=>setOpen(true)}
        />
      </td>
    </Table.Row>
  );
};

export default ProjectsRow;
