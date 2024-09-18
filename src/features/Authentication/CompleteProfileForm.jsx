import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import Button from "../../ui/Button";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { completeProfile } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

const CompleteProfileForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);

      if (!user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm  pt-10">
        <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
          <TextFieldInput
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{ required: " نام ضروری است" }}

            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <TextFieldInput
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}

            // type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name : "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                { value: "OWNER", label: "کارفرما" },
                { value: "FREELANCER", label: "فریلنسر" },
              ],
            }}
          />

          {/* <div className="flex items-center justify-center gap-x-8"></div> */}
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <Button
                className={"btn btn--primary"}
                title={" تایید"}
                type="submit"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
