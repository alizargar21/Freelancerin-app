import React from "react";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];
const ProposalsRow = ({ proposal, index }) => {
  const { status, description, price, duration } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td> {toPersianNumbers(duration)}روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
};

export default ProposalsRow;
