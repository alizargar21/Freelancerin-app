import React from "react";
import Button from "../../ui/Button";
import RHFSelect from "../../ui/RHFSelect";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];
const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 ">
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div>
          {isUpdating ? (
            <Loading/>
          ) : (
            <Button
              type={"submit"}
              className="btn btn--primary w-full mt-12"
              title={"تایید"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangeProposalStatus;
