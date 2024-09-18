import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";

const CreateProjectForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date , setDate] = useState(new Date)
  const onSubmit = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        options={[]}
        required
      />
      <div>
      <label className="mb-2 block text-secondary-700">تگ </label>
      <TagsInput value={tags} onChange={setTags} name="tags" />

      </div>
      <DatePickerField date={data} setDate={setDate} label={"ددلاین"}/>
      <Button
        title={"تایید"}
        type={"submit"}
        className={"btn btn--primary w-full"}
      />
      
    </form>
  );
};

export default CreateProjectForm;
