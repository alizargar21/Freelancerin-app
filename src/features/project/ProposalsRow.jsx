import React, { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import {
  toPersianNumbersWithComma,
  toPersianNumbers,
} from "../../utils/toPersianNumber";
const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];
const ProposalsRow = ({ proposal, index }) => {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{toPersianNumbers(proposal.duration)}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
  
      
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={"تغییر وضعیت درخواست"}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>

        <Button onClick={() => setOpen(true)} title={"تغییر وضعیت "} />
      </td>
    </Table.Row>
  );
};

export default ProposalsRow;
