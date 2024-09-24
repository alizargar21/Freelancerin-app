import React from "react";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import Empty from "../../../ui/Empty";
import UserRow from "./UserRow";
import Loading from "../../../ui/Loading";

const UsersTable = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loading />;
  if (!users.length) return <Empty resourceName="کاربری" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام </th>

        <th>ایمیل</th>
        <th>شماره موبایل</th>

        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow user={user} index={index} key={user._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
