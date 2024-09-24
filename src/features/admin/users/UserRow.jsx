import React, { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import ChangeUserStatus from "./ChangeUserStatus";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];
const UserRow = ({ user, index }) => {
  const [open, setOpen] = useState(false);
  const { status } = user;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>

      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge  ${statusStyle[status].className} `}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={"تغییر وضعیت کاربر"}
        >
          <ChangeUserStatus
           userId={user._id}
            onClose={() => setOpen(false)}
          />
        </Modal>

        <Button onClick={() => setOpen(true)} title={"تغییر وضعیت "} />
      </td>
    </Table.Row>
  );
};

export default UserRow;
