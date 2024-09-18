import React, { useEffect, useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
  const { _id: editProjectId } = projectToEdit;
  const isEditSession = Boolean(editProjectId);
  const { editProject, isEditing } = useEditProject();
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category?._id,
    };
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editValues });
  const { categories } = useCategories();
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { isCreating, createProject } = useCreateProject();
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        {
          id: editProjectId,
          newProject,
        },
        
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    console.log(newProject);

    } else {
      createProject(newProject, {
        onSucces: () => {
          onClose();
          reset();
        },
      });
    console.log(newProject);

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-96">
      <TextFieldInput
        label={"عنوان پروژه"}
        name="title"
        register={register}
        errors={errors}

        required
        ValidationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 4,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextFieldInput
        label={"توضیحات"}
        name="description"
        register={register}
        required
        errors={errors}
        ValidationSchema={{
          required: "توضیحات ضروری است",
          minLength: { value: 4, message: "نا معتبر است طول توضیحات " },
        }}
      />
      <TextFieldInput
        label={"بودجه"}
        name={"budget"}
        register={register}
        errors={errors}
        required
        ValidationSchema={{
          required: "بودجه ضروری است",
          minLength: { value: 4, message: "مقدار بودجه نا معتبر است" },
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
      <div className="!mt-8">
        {isCreating || isEditing ? (
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
  );
};

export default CreateProjectForm;
