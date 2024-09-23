import React from "react";
import useProposals from "./useProposals.js";
import Loading from "../../ui/Loading.jsx";
import Table from "../../ui/Table.jsx";
import Empty from "../../ui/Empty.jsx";
import ProposalsRow from "./ProposalsRow.jsx";
const ProposalsTable = () => {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resourceName=" پروپوزال" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>

        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalsRow
            proposal={proposal}
            index={index}
            key={proposal._id}
          />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProposalsTable;
