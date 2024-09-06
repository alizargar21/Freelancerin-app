import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import Button from "../../ui/Button";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { completeProfile } from "../../services/authServices";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm  pt-10">
        <form className="space-y-8" onSubmit={submitHandler}>
          <TextFieldInput
            label="نام و نام خانوادگی"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextFieldInput
            label="ایمیل"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              id="OWNER"
              name="role"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
            />
            <RadioInput
              label="فریلنسر"
              checked={true}
              id="FREELANCER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value="FREELANCER"
            />
          </div>
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
