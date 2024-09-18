import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";

const CreateProjectForm = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
   const { categories } = useCategories();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { isCreating, createProject } = useCreateProject();
  const onSubmit = (data) => {
    const newPorject = {
      ...date,
      tags,
      daedline: new Date(date).toISOString(),
    };
    createProject(newPorject, {
      onSucces: () => {
        onClose();
        reset();
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-96">
      <TextFieldInput
        label={"عنوان پروژه"}
        name={"title"}
        register={register}
        required
        ValidationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 10, message: "نا معتبر است طول عنوان " },
        }}
      />
      <TextFieldInput
        label={"توضیحات"}
        name={"description"}
        register={register}
        required
        ValidationSchema={{
          required: "توضیحات ضروری است",
          minLength: { value: 10, message: "نا معتبر است طول توضیحات " },
        }}
      />
      <TextFieldInput
        label={"بودجه"}
        name={"budget"}
        register={register}
        required
        ValidationSchema={{
          required: "بودجه ضروری است",
          minLength: { value: 10, message: "نا معتبر است طول بودجه " },
        }}
      />
      <RHFSelect
        register={register}
        name={"category"}
        label={"دسته بندی"}
         options={categories}
        required
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label={"ددلاین"} />
      {isCreating ? (
        <Loading />
      ) : (
        <Button
          title={"تایید"}
          type={"submit"}
          className={"btn btn--primary w-full"}
        />
      )}
    </form>
  );
};

export default CreateProjectForm;
