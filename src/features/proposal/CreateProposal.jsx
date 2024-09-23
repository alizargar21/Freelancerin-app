import React from "react";
import { useForm } from "react-hook-form";
import TextFieldInput from "../../ui/TextFieldInput";
import Loading from "../../ui/Loading";
import Button from "../../ui/Button";
import useCreateProposal from "./useCreateProposal";
const CreateProposal = ({ onClose, projectId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { isCreating, createProposal } = useCreateProposal();
  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };
  return (
    <div className="w-96">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextFieldInput
          label={"توضیحات"}
          name={"description"}
          type="text"
          register={register}
          required
          ValidationSchema={{ required: "عنوان ضروری است" }}
          errors={errors}
        />
        <TextFieldInput
          label={"قیمت"}
          name={"price"}
          type="number"
          register={register}
          required
          ValidationSchema={{ required: "قیمت ضروری است" }}
          errors={errors}
        />
        <TextFieldInput
          label={"مدت زمان"}
          name={"duration"}
          type="number"
          register={register}
          required
          ValidationSchema={{ required: "مدت زمان ضروری است" }}
          errors={errors}
        />
        <div className="!mt-8">
          {!1 ? (
            <Loading />
          ) : (
            <Button
              title={"تایید"}
              type={"submit"}
              className={"btn btn--primary w-full"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateProposal;
